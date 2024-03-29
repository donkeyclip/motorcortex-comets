import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
import { _addDimension, timely } from "../helpers/randomizer";
const closeAngle = 29;

export default class Comets extends HTMLClip {
  get html() {
    // first get the time (position / duration) random numbers
    this.comets = timely({
      duration: this.attrs.duration / this.attrs.repeats,
      numberOfElements: this.attrs.items,
      minDuration: 0.1,
      maxDuration: 0.9,
    });
    // console.log(JSON.parse(JSON.stringify(this.comets)));
    // secondly depending on the duration set size
    for (let i = 0; i < this.comets.length; i++) {
      const comet = this.comets[i];
      const fraction = comet[0] / (this.attrs.duration / this.attrs.repeats);
      const size =
        (this.attrs.cometMaxSize - this.attrs.cometMinSize) * (1 - fraction) +
        this.attrs.cometMinSize;
      comet.push(size); // now each row has the form [duration, position, size]
    }
    // finally we add the position random dimension. Comets can start from anyplace that will allow them to be
    // visible in our Clip even a little and even in only part of their path
    const angle = ((90 - closeAngle) * Math.PI) / 180;
    const extraWidth = this.attrs.height * Math.tan(angle);
    this.comets = _addDimension(
      {
        from: 0,
        to: this.attrs.width + extraWidth,
        numberOfElements: this.attrs.items,
      },
      this.comets
    ); // now each row has the form [duration, position, size, left]
    // console.log(this.comets);

    let list = [];
    this.itemData = [];
    const A = ((90 - closeAngle) * Math.PI) / 180; // the big angle
    const B = (closeAngle * Math.PI) / 180; // the close angle
    for (let i = 0; i < this.attrs.items; i++) {
      const size = this.comets[i][2];
      const a = size * Math.sin(B); // the horizontal size of the comet box
      const b = size * Math.sin(A); // the vertical size of the comet box
      const left = this.comets[i][3];
      this.itemData.push({ left, top: -b, width: a, size });
      const comet = ` 
                <svg class="comet-svg comet-svg-${i}" style="left: ${left}px; top: -${b}px; width: ${a}px; height: ${b}px;" xmlns="http://www.w3.org/2000/svg" class="comet-green-svg" data-name="Layer 1" viewBox="0 0 450 270.44">
                <defs>
                    <linearGradient id="b" x1="-56.99" x2="-56.74" y1="394.68" y2="394.93" gradientTransform="matrix(1363.47 0 0 -819.42 77776.05 323638.12)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="${this.attrs.auraOuter[0]}" stop-opacity=".59"/>
                    <stop offset="1" stop-color="${this.attrs.auraOuter[1]}" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="d" x1="-56.97" x2="-56.79" y1="394.95" y2="395.11" gradientTransform="matrix(900.62 0 0 -542.55 51377.26 214502.16)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="${this.attrs.auraIner[0]}"/>
                    <stop offset=".31" stop-color="${this.attrs.auraIner[1]}" stop-opacity=".97"/>
                    <stop offset="1" stop-color="${this.attrs.auraIner[2]}" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="f" x1="-56.81" x2="-56.49" y1="399.49" y2="399.76" gradientTransform="matrix(116.79 0 0 -75.59 6649.18 30453.64)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="${this.attrs.meteoriteColors[0]}"/>
                    <stop offset="1" stop-color="${this.attrs.meteoriteColors[1]}"/>
                    </linearGradient>
                    <mask id="a" width="450" height="270.44" x="0" y="0" maskUnits="userSpaceOnUse">
                    <path fill="#fff" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>
                    </mask>
                    <mask id="c" width="297.24" height="179.06" x="7.51" y="84.83" maskUnits="userSpaceOnUse">
                    <path fill="#fff" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>
                    </mask>
                    <mask id="e" width="38.55" height="24.95" x="12.81" y="234.29" maskUnits="userSpaceOnUse">
                    <path fill="#fff" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>
                    </mask>
                </defs>
                <g mask="url(#a)">
                    <path fill="url(#b)" fill-rule="evenodd" d="M11.33 230a21.52 21.52 0 0020.31 38L450 38 429.7 0 11.33 230z"/>
                </g>
                <g mask="url(#c)">
                    <path fill="url(#d)" fill-rule="evenodd" d="M14.65 238.41a13.55 13.55 0 0012.78 23.89l277.32-153.58L292 84.83 14.65 238.41z"/>
                </g>
                <g mask="url(#e)">
                    <path fill="url(#f)" fill-rule="evenodd" d="M17.69 241.85a9.24 9.24 0 008.73 16.29c4.5-2.41 24.94-23.85 24.94-23.85s-29.17 5.15-33.67 7.56"/>
                </g>
                </svg>
            `;

      list += comet;
    }

    return `
            <div class="wrapper">
            ${list}
            </div>
        `;
  }

  get css() {
    return `
            .wrapper{
                width: ${this.attrs.width}px;
                height:${this.attrs.height}px;
            }
            .comet-svg{
                position: absolute;
                z-index: 3;
            }
        `;
  }

  buildTree() {
    for (let i = 0; i < this.comets.length; i++) {
      // console.log(Math.tan(angle)*(-this.itemData[i].width -this.itemData[i].left)+ this.itemData[i].top)
      const angle = (-closeAngle * Math.PI) / 180;
      const moveMagentComet = new CSSEffect(
        {
          animatedAttrs: {
            left: `-${this.itemData[i].width}px`,
            top: `${
              Math.tan(angle) *
                (-this.itemData[i].width - this.itemData[i].left) +
              this.itemData[i].top
            }px`,
          },
        },
        {
          selector: `.comet-svg-${i}`,
          duration: this.comets[i][0],
          delay: this.comets[i][1],
          repeats: this.attrs.repeats,
        }
      );
      this.addIncident(moveMagentComet, 0);
    }
  }
}
