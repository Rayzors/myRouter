import Route, { isRoute } from './interfaces/route';
import Hooks from './interfaces/hooks';
import RouteRequest from './interfaces/request';

/**
 * KMRouter
 *
 * @export
 * @class KMRouter
 */
export class KMRouter {
  private routes: Array<Route>;
  private matchedRoute: Route | undefined = undefined;
  private params: {};

  hooks: Hooks = {};

  /**
   * @description Creates an instance of Router.
   * @param {Array<Route>} routes
   * @memberof KMRouter
   */
  constructor(routes: Array<Route>) {
    this._checkRoutesType(routes);
    this.routes = routes;
    this.params = {};
    this.routes.map((route: Route) => ({
      ...route,
      path: this._formatPath(route.path),
    }));
    this._bind();
  }

  /**
   * @description Initialize event listeners
   * @memberof KMRouter
   */
  private _bind() {
    window.addEventListener('load', (e) => this.onWindowLoad(e));
    window.addEventListener('popstate', (e) => this.handlePopState(e));
    document.body.addEventListener('click', (e) => this._triggerRouterLink(e));
  }

  /**
   * @description Check if the path has the right format
   * @private
   * @param {string} path
   * @returns {string}
   * @memberof KMRouter
   */
  private _formatPath(path: string): string {
    try {
      if (path.match(/^(\/\#|\#\/)/)) {
        throw `bad url \`${path}\``;
      }
      if (path === '') {
        return '/';
      }
      if (path.match(/^\//) === null && path.match(/^\*$/) === null) {
        return `/${path}`;
      }
      if (path.match(/^\*$/)) {
        return `*`;
      }
      return path;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * @description Check if routes is an Array of Route
   * @private
   * @param {Array<Route>} routes
   * @memberof KMRouter
   */
  private _checkRoutesType(routes: Array<Route>) {
    try {
      if (!Array.isArray(routes)) {
        throw new Error('The second argument must be an array of object');
      }

      const AreAllObjectRoutes = routes.every((route) => isRoute(route));
      if (!AreAllObjectRoutes) {
        throw new Error(
          'Routes must have a "path" key (string) and a "action" key (function)'
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * @description Get the current route and execute the associated methods
   * @private
   * @param {{
   *     EventType: string;
   *     url: string;
   *     redirect?: boolean;
   *   }} {
   *     EventType,
   *     url,
   *     redirect = false,
   *   }
   * @returns
   * @memberof KMRouter
   */
  private async _dispatch({
    EventType,
    url,
    redirect = false,
  }: {
    EventType: string;
    url: string;
    redirect?: boolean;
  }) {
    try {
      if (typeof url !== 'string') {
        throw new Error('the path renseigned is not a string');
      }

      if (!url || url.trim() === '') {
        throw new Error('No url renseigned');
      }

      if (redirect && url.match(/^(http:\/\/|https:\/\/)/)) {
        window.location.replace(url);
        return;
      }

      const previousRouteRequestObject = this._makeRequestObject({
        url: window.location.href,
        EventType,
      });

      // Leave Hooks
      EventType !== 'load' &&
        (await this._hookPromisify(
          this.hooks.leave,
          previousRouteRequestObject
        ));
      EventType !== 'load' &&
        (await this._hookPromisify(
          this.matchedRoute?.leave,
          previousRouteRequestObject
        ));

      this.matchedRoute = this._match(url);

      if (this.matchedRoute) {
        if (this.matchedRoute.redirect) {
          this._dispatch({
            EventType,
            url: this.matchedRoute.redirect,
            redirect: true,
          });
        }

        const currentRouteRequestObject = this._makeRequestObject({
          url,
          EventType,
        });

        // Before Hooks
        await this._hookPromisify(this.hooks.before, currentRouteRequestObject);
        await this._hookPromisify(
          this.matchedRoute.before,
          currentRouteRequestObject
        );

        // Handle pushState & replaceState
        EventType === 'click' &&
          url.match(/^\*$/) === null &&
          history.pushState({ key: url }, document.title, url);
        EventType === 'load' &&
          url.match(/^\*$/) === null &&
          history.replaceState({ key: url }, document.title, url);

        // trigger action
        this.matchedRoute.action(currentRouteRequestObject);
      } else if (url.match(/^\*$/) === null) {
        this._dispatch({ EventType, url: '*' });
      } else {
        throw new Error(`404 not found ${url}`);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * @description Check if the requested URL exist in the route array
   * @param {string} url
   * @returns {(Route|undefined)}
   * @memberof KMRouter
   */
  private _match(url: string): Route | undefined {
    return this.routes.find(({ path }) => {
      const generatedURLRegExp = this._generateURLRegExp(path);
      const matches = url.match(generatedURLRegExp);

      if (url !== '/' && generatedURLRegExp.test('/')) {
        return false;
      }

      if (generatedURLRegExp.test(url) && matches?.[0]?.includes(url)) {
        this.params = matches.groups || {};
        return true;
      }

      return false;
    });
  }

  /**
   * @description Generate the URL Regex
   * @private
   * @param {string} path
   * @returns {RegExp}
   * @memberof KMRouter
   */
  private _generateURLRegExp(path: string): RegExp {
    const reg = /\{([^\s/\:]+)\:?(?:\((.*?)\))?\}/g;

    const routeRegExp = `${path.replace(reg, (...args) =>
      args[2] ? `(?<${args[1]}>${args[2]})` : `(?<${args[1]}>\\w+)`
    )}/?`.replace(/[*]/g, '\\$&');

    return new RegExp(routeRegExp);
  }

  /**
   * @description Promisify hook to wait for next() to go to the next page
   * @private
   * @param {*} fn
   * @param {RouteRequest} request
   * @returns
   * @memberof KMRouter
   */
  private async _hookPromisify(fn: any, request: RouteRequest) {
    if (!fn) return;
    await new Promise((resolve) => {
      fn(request, () => {
        resolve();
      });
    });
  }

  /**
   * @description
   * @private
   * @param {{
   *     url: string;
   *     EventType: string;
   *   }} {
   *     url,
   *     EventType,
   *   }
   * @returns {RouteRequest}
   * @memberof KMRouter
   */
  private _makeRequestObject({
    url,
    EventType,
  }: {
    url: string;
    EventType: string;
  }): RouteRequest {
    return {
      redirect: (uri: string) =>
        this._dispatch.call(this, {
          EventType,
          url: uri,
          redirect: true,
        }),
      params: this.params,
      path: url,
    };
  }

  /**
   * @description Trigger navigation on click on link with the 'data-router-link' attribute
   * @private
   * @param {MouseEvent} e
   * @memberof KMRouter
   */
  private async _triggerRouterLink(e: MouseEvent) {
    const el = e.target as HTMLElement;
    if (
      el?.closest('[data-router-link]')?.getAttribute?.('href') ||
      el?.closest('[data-router-link]')?.getAttribute?.('to')
    ) {
      e.preventDefault();
      const url =
        el?.closest('[data-router-link]')?.getAttribute?.('href') ||
        el?.closest('[data-router-link]')?.getAttribute?.('to') ||
        '*';
      this._dispatch({ EventType: e.type, url });
    }
  }

  /**
   * @description get the right route on window load event
   * @private
   * @param {Event} e
   * @memberof KMRouter
   */
  private onWindowLoad(e: Event) {
    this._dispatch({
      EventType: e.type,
      url: window.location.pathname,
    });
  }

  /**
   * @description get the right route on popstate event
   * @private
   * @param {PopStateEvent} e
   * @memberof KMRouter
   */
  private handlePopState(e: PopStateEvent) {
    this._dispatch({
      EventType: e.type,
      url: e.state?.key,
    });
  }

  /**
   * @description Allow the user to redirect and add a state in his history
   * @param {string} url
   * @memberof KMRouter
   */
  public push(url: string) {
    if (typeof url !== 'string') {
      throw new Error('push(url): url given is not a string');
    }

    this._dispatch({
      EventType: 'click',
      url,
    });
  }

  /**
   * @description Allow the user to redirect and replace the current state in his history
   * @param {string} url
   * @memberof KMRouter
   */
  public replace(url: string) {
    if (typeof url !== 'string') {
      throw new Error('replace(url): url given is not a string');
    }

    this._dispatch({
      EventType: 'load',
      url,
      redirect: true,
    });
  }
}
