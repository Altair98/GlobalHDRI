import Image from "next/image";
import { Metadata } from "next";
import './style.css';


export const metadata: Metadata = {
    title: "GlobalHDRI",
    description: "GlobalHDRI - Blender Addon",
  };


export default function Home() {
  return (
    <div className="container-wrapper">
      {/* <!-- Hero Container Start --> */}
      <div className="hero-container">
        <div className="hero-container-bg">
          <img src="include/images/hero/Hero-Gif.gif"/>
        </div>
        <div className="hero-container-content">
          <div className="hero-white-logo">
            <img src="include/images/hero/Isotype White.png" alt=""/>
          </div>
          <div className="hcc-upper">
            <h1>Masters the light, Own the scene</h1>
            <p>
              GlobalHDRI is the ultimate tool to unleash the full potential of HDRIs in Blender and over 500+ enviroments ready to transform your renders in a single click
            </p>
          </div>
          <div className="hcc-video">
            <div className="hcc-video-box">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/TrLadxI1O5c?si=e99UnKIEyvQTfOZd"></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Container End   --> */}

      {/* <!-- Features container start --> */}
      <div className="content-container pb-0 features-container">
        <div className="toolkit-heading">
          <p>Your <strong>HDRI</strong> toolkit, <strong>Unpacked</strong></p>
        </div>
        <div className="features-list">
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-2.gif" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  The only HDRI <strong>addon</strong> you'ill ever need
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-3.gif" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  Explore 500+ <strong>enviroments</strong> included in GlobalHDRI
                </p>
              </div>
            </div>
          </div>
          <div className="inAction-heading">
            <p>See GlobalHDRI and his library in <strong>action</strong></p>
          </div>
          <div className="features-item-triple">
            <div className="features-box-triple">
              <div className="features-box-bg">
                <a href="https://www.youtube.com/watch?v=v78Snm1BSNk" className="" target="_blank">
                  <img src="include/images/features/features-bg-5.png" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item-triple">
            <div className="features-box-triple">
              <div className="features-box-bg">
                <a href="https://www.youtube.com/watch?v=K0-9Ycl6GA0" className="" target="_blank">
                  <img src="include/images/features/features-bg-6.png" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item-triple">
            <div className="features-box-triple">
              <div className="features-box-bg">
                <a href="https://www.youtube.com/watch?v=33AI5ksH16E" className="" target="_blank">
                  <img src="include/images/features/features-bg-7.png" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="texto-gordo">
            <p><strong>Why</strong> GlobalHDRI?</p>
            <p><br></br><br></br><strong>All-in-one</strong> Control Over HDRI Lighting in <strong>Blender</strong></p>
            <p><br></br><strong>+500</strong> HDRIs in One Massive Library</p>
            <p><br></br>All enviroments in <strong>8K</strong></p>
            <p><br></br><strong>Customize Everything</strong> in just a few clicks</p>
            <p><br></br>Dome projection for<strong> Real-World Depth</strong></p>
            <p><br></br>Best organization with <strong>Dynamic</strong> Folders System</p>
            <p><br></br>Add to<strong> favorites and stay organized </strong>, never lose your HDRIs</p>
            <p><br></br><strong>The Most Powerful</strong> HDRI Add-on Ever Made for Blender</p>
          </div>
          <div className="inAction-heading explore">
            <p>Explore the <strong>features</strong></p>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-alt">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-10.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Essential Controls</strong><br></br>
                  <span className="smaller-text">
                  Dial in the core lighting settings <br></br>
                  HDRI strength, sun intensity, gamma and light direction.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-alt">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-11.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Dome Projection</strong><br></br>
                  <span className="smaller-text">
                  Transform any HDRI into a 3D dome with visible floor <br></br>
                  and walls for more inmersive scene.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-cuadrada">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-12.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Auto contrast</strong><br></br>
                  <span className="smaller-text">
                  Automatically balances your scene's lighting
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-cuadrada">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-13.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Add to Favorites</strong><br></br>
                  <span className="smaller-text">
                  Save your HDRIs that light your scenes best directly from the preview.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-alt">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-14.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>All about color</strong><br></br>
                  <span className="smaller-text">
                  Hue, saturation, tint, warmth and precision curves all at your fingertips.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-alt">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-15.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Total Background Control</strong><br></br>
                  <span className="smaller-text">
                  Change the visual background without affecting your lighting. Add color, images, or HDRI-based blurs, all adjustable.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-cuadrada">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-16.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Drag and drop</strong><br></br>
                  <span className="smaller-text">
                  Just drag it in. Fast, simple and ready to go.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-cuadrada">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-17.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Dynamic Folders</strong><br></br>
                  <span className="smaller-text">
                  Manage your library with total freedom<br></br>
                  your folders, your structure, always synced.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-tiguere">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-18.jpg" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Infinite Possibilities</strong><br></br>
                  <span className="smaller-text">
                  What you have seen is just the surface, more features awaits to discover, the combinations, endless. Go make them your own.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="inAction-heading">
            <p>Explore  <strong>500+</strong> Enviroments included in <strong>GlobalHDRI</strong></p>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-tiguere">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-19.gif" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>All the worlds you need</strong><br></br>
                  <span className="smaller-text">
                  Interiors, exteriors, vegetation, anime, fantasy, studio, sci-fi, retro, apocalypse
                  and more, all in one massive library.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-tiguere">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-20.jpg" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Indoor Enviroments 220+</strong><br></br>
                  <span className="smaller-text">
                  Inside Every Imaginable Space Shops, studios, garages, digital machines
                  every kind of indoor light, ready to power your scenes.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-tiguere">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-21.jpg" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Outdoor Enviroments 100+</strong><br></br>
                  <span className="smaller-text">
                  From Greek ruins to the streets of Paris, Madrid, Bangkok
                  at sunrise, mid-day or night. Nature, neon or nostalgia it's all here.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-22.jpg" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Studio Enviroments 100+</strong><br></br>
                  <span className="smaller-text">
                  From softboxes to spotlights every kind of studio lighting
                  is at your figertips
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-23.jpg" alt=""/>
              </div>
              <div className="features-box-text-alt">
                <p>
                  <strong>Other Enviroments 70+</strong><br></br>
                  <span className="smaller-text">
                  From the mouth of a dragon to deep space, from anime skies to fantasy
                  dreamscapes, this is where the rules breaks.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thin">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-24.jpg" alt=""/>
              </div>
              <div className="features-box-text-thin">
                <p>
                  <span className="text-for-thin1">
                    <strong>Unmatched value</strong> for a complete HDRI solution <br></br><br></br>
                  </span>
                  <span className="text-for-thin2">
                    Less than <strong>0.08$</strong> per HDRI + <strong>GlobalHDRI</strong> Addon
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-tabla">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-25.png" alt=""/>
              </div>
            </div>
          </div>
          <div className="inAction-heading-artist">
            <p><strong>Artist Showcase</strong>, Powered by GlobalHDRI & his library, <br></br>
             all renders use only <strong>one</strong> HDRI from our library, <strong>no additional lights or tricks.</strong></p>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thick">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-26.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-doble">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-27.jpg" alt=""/>
              </div>
              <div className="credits-text">
                <p>
                  By 3DReach
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-crown">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-28.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thick">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-29.jpg" alt=""/>
              </div>
              <div className="credits-text">
                <p>
                  By GabrieloAlex
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thick">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-30.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thick">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-31.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-zombie">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-32.jpg" alt=""/>
              </div>
              <div className="credits-text">
                <p>
                  By Steffen Hartman
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box-zombie">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-33.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thick">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-34.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thick">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-35.jpg" alt=""/>
              </div>
              <div className="credits-text">
                <p>
                  By Alex Pi
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thin2">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-36.jpg" alt=""/>
              </div>
              <div className="credits-text">
                <p>
                  By Colorsponge Carlos
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thin2">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-37.jpg" alt=""/>
              </div>
              <div className="credits-text2">
                <p>
                  By Samet Dereli
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thin3">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-38.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="inAction-heading-last">
            <p>Looking for <strong>ultra-realistic</strong> skin in Blender?</p>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thin-">
              <div className="features-box-bg">
                <a href="https://superhivemarket.com/products/globalskin-ultimate-skin-shader" className="" target="_blank">
                  <img src="include/images/features/features-bg-39.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thin3">
              <div className="footer-bg">
                <div className="icons">
                  <div className="blendify-icon">
                    <p>Tool by <strong>Blendify </strong></p>
                    <a href="https://superhivemarket.com/creators/blendify" className="" target="_blank">
                      <img src="include/images/footer/Blendify Icon.png" alt=""/>
                    </a>
                  </div>
                  <div className="other-icons">
                    <a href="https://www.youtube.com/@Blendify.addons" className="yt-icon" target="_blank">
                      <img src="include/images/footer/YT Icon.png" alt=""/>
                    </a>
                    <a href="https://x.com/GabrieloAlex" className="x-icon" target="_blank">
                      <img src="include/images/footer/X Icon.png" alt=""/>
                    </a>
                    <a href="https://discord.gg/d2zCBRQE" className="dc-icon" target="_blank">
                      <img src="include/images/footer/disc_icon.png" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box-thin--">
              <div className="footer-bg-2">
                <div className="bg-text">
                  <div className="text">
                    <p>That's a wrap! <strong>Thanks for your time</strong><br></br>
                    and may GlobalHDRI light your <strong>next masterpice.</strong></p>
                  </div>
                  <div className="smile">
                    <img src="include/images/footer/Smile Face.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features container end   --> */}
    </div>
  );
}
