import type { TemplateResult } from 'lit';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('matjs-fan')
export class Fan extends LitElement {
  public static styles = css`
    .fan {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      background: #00deff;
      border-radius: 50%;
      box-sizing: border-box;
      aspect-ratio: 1;
    }

    .inner {
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;
      background: #008fb3;
      border-radius: 50%;
      outline: 2px solid #004b66;
      transition: animation-duration 2s ease;
      animation: rotate 0s linear infinite;
    }

    .inner > div {
      position: absolute;
      top: 14%;
      left: 14%;
      width: 36%;
      height: 36%;
      background: #7afbff;
      border: 2px solid #004b66;
      border-radius: 100% 0 0;
      transform: rotate(45deg) skew(15deg, 15deg);
      transform-origin: bottom right;
      box-sizing: border-box;
    }

    .inner > div:nth-child(2) {
      transform: rotate(165deg) skew(15deg, 15deg);
    }

    .inner > div:nth-child(3) {
      transform: rotate(285deg) skew(15deg, 15deg);
    }

    .inner:after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      background: #7afbff;
      border: 2px solid #004b66;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      content: '';
    }

    /* 旋转动画 */
    /* 一档 */
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(1080deg);
      }
    }
  `;

  // get width(): string {
  //   return this.getAttribute('width') || '100%';
  // }

  // get speed(): 'stop' | 'slow' | 'normal' | 'fast' {
  //   return (this.getAttribute('speed') as 'stop' | 'slow' | 'normal' | 'fast') || 'stop';
  // }

  @property() width = '100%';
  // @property() height: string = '100%';
  @property() speed: 'stop' | 'slow' | 'normal' | 'fast' = 'stop';

  private getAnimationDuration() {
    switch (this.speed) {
      case 'fast':
        return 3;
      case 'normal':
        return 6;
      case 'slow':
        return 12;
      case 'stop':
      default:
        return 0;
    }
  }

  public render(): TemplateResult {
    return html`<div class="fan" style="width: ${this.width || '100%'};">
      <div class="inner" style="animation-duration: ${this.getAnimationDuration()}s;">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>`;
  }
}

export default Fan;

declare global {
  interface HTMLElementTagNameMap {
    'elem-fan': Fan;
  }
}
