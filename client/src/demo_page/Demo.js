import React, { Component } from "react";
import Pages from "./components/Pages";
import Features from "./components/Features";
import Suggestions from "./components/Suggestions";

class Demo extends Component {
  render() {
    let demos = [
      { demoImg: "home-1.jpg", demoLink: "home-one", demoTitle: "Home One" },
      { demoImg: "home-2.jpg", demoLink: "home-two", demoTitle: "Home Two" },
      { demoImg: "about.jpg", demoLink: "about-us", demoTitle: "About Page" },
      {
        demoImg: "service-1.jpg",
        demoLink: "services",
        demoTitle: "Service Page"
      },
      {
        demoImg: "service-details-1.jpg",
        demoLink: "service-details-left-sidebar",
        demoTitle: "Service Details (Left Sidebar)"
      },
      {
        demoImg: "service-details-2.jpg",
        demoLink: "service-details-right-sidebar",
        demoTitle: "Service Details (Right Sidebar)"
      },
      {
        demoImg: "project-1.jpg",
        demoLink: "projects",
        demoTitle: "Project Page"
      },
      {
        demoImg: "project-details-1.jpg",
        demoLink: "project-details",
        demoTitle: "Project Details"
      },
      {
        demoImg: "blog-1.jpg",
        demoLink: "blog-left-sidebar",
        demoTitle: "Blog 2 Column (Left Sidebar)"
      },
      {
        demoImg: "blog-2.jpg",
        demoLink: "blog-right-sidebar",
        demoTitle: "Blog 2 Column (Right Sidebar)"
      },
      {
        demoImg: "blog-details-1.jpg",
        demoLink: "blog-details-left-sidebar",
        demoTitle: "Blog Details (Left Sidebar)"
      },
      {
        demoImg: "blog-details-2.jpg",
        demoLink: "blog-details-right-sidebar",
        demoTitle: "Blog Details (Right Sidebar)"
      },
      { demoImg: "contact.jpg", demoLink: "contact-us", demoTitle: "Contact" }
    ];

    let features = [
      {
        featureIconName: "icon-genius",
        featureTitle: "Latest React",
        featureDescription: "Latest React v16.8.6 used"
      },
      {
        featureIconName: "icon-mobile",
        featureTitle: "Responsive Design",
        featureDescription:
          "Castro is supper responsive & work perfectly in all devices."
      },
      {
        featureIconName: "icon-profile-male",
        featureTitle: "User Friendly",
        featureDescription:
          "Castro easy to use for any technical & nontechnical People."
      },
      {
        featureIconName: "icon-beaker",
        featureTitle: "Creative Design",
        featureDescription: "It comes with creative & smart design layout."
      },
      {
        featureIconName: "icon-puzzle",
        featureTitle: "Icon Font",
        featureDescription:
          "It comes with most popular FontAwesome, Ionicon and Flaticon icon font."
      },
      {
        featureIconName: "icon-puzzle",
        featureTitle: "Google Font",
        featureDescription:
          "600+ Google Fonts. You can change font for all elements easily."
      },
      {
        featureIconName: "icon-search",
        featureTitle: "Clean Markup",
        featureDescription: "We developed it followed by W3C Markup."
      },
      {
        featureIconName: "icon-upload",
        featureTitle: "Free Updates",
        featureDescription: "Purchase once & get life-time free updates."
      },
      {
        featureIconName: "icon-megaphone",
        featureTitle: "Real Support",
        featureDescription: "We provide 7 days a week one by one real support."
      }
    ];

    let suggestionsHTML = [
      {
        imgUrl: "//s3.envato.com/files/232479246/preview.__large_preview.png",
        suggestionLink:
          "//themeforest.net/item/simple-construction-html5-template/20544783?ref=AslamHasib",
        suggestionTitle: "Simply - Construction HTML5 Template"
      },
      {
        imgUrl: "//s3.envato.com/files/223304965/preview.__large_preview.jpg",
        suggestionLink:
          "//themeforest.net/item/raees-responsive-Mobile Apps-architect-template/19664044?ref=AslamHasib",
        suggestionTitle: "Raees – Responsive Mobile Apps / Architect Template"
      },
      {
        imgUrl:
          "//s3.envato.com/files/254880184/01_preview_khonike.__large_preview.png",
        suggestionLink:
          "//themeforest.net/item/khonike-real-estate-bootstrap-4-template/22664933?ref=AslamHasib",
        suggestionTitle: "Khonike - Real Estate Bootstrap 4 Template"
      }
    ];

    let suggestionsWP = [
      {
        imgUrl: "//s3.envato.com/files/230133244/preview.__large_preview.jpg",
        suggestionLink:
          "//themeforest.net/item/raees-creative-responsive-Mobile Apps-theme/20309575?ref=AslamHasib",
        suggestionTitle: "Raees – Creative Responsive Mobile Apps Theme"
      },
      {
        imgUrl: "//s3.envato.com/files/239072226/preview.__large_preview.png",
        suggestionLink:
          "//themeforest.net/item/tuco-construction-building-wordpress-theme/21192136?ref=AslamHasib",
        suggestionTitle: "Tuco - Construction & Building WordPress Theme"
      },
      {
        imgUrl: "//s3.envato.com/files/225152672/preview.__large_preview.jpg",
        suggestionLink:
          "//themeforest.net/item/shield-roofing-service-wordpress-theme/19837552?ref=AslamHasib",
        suggestionTitle: "Shield - Roofing Service WordPress Theme"
      }
    ];

    return (
      <div>
        <div className="landing-page-wrapper">
          {/* Start Header Section */}
          <div className="header-section section sticker">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                {/* Logo */}
                <div className="logo col-6 text-left">
                  <a href="/">
                    <img
                      src="assets/img/landing/logo-light.png"
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      src="assets/img/landing/logo.png"
                      alt=""
                      className="sticky-logo img-fluid"
                    />
                  </a>
                </div>
                {/* Logo */}
                <div className="col-6 text-right">
                  <a
                    className="buy-btn"
                    href="//themeforest.net/user/hastech/portfolio"
                  >
                    buy Castro
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Header Section End */}
          {/* Start Hero Section */}
          <div className="hero-section section overlay landing-hero-bg">
            <div className="container">
              <div className="row">
                <div className="hero-content text-center col-12">
                  <h1>
                    <strong>Castro</strong>React Construction Template
                  </h1>
                  <p>
                    Castro is an excellent platform to maintain your
                    construction business. Castro builds your dream, your
                    future.
                  </p>
                  <a className="buy-btn" href="#demo">
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Section End */}

          {/* Pages Section Start */}
          <Pages demos={demos} />
          {/* Pages Section End */}

          {/* Features Section Start */}
          <Features features={features} />
          {/* Features Section End */}

          {/* Suggestions HTML Section Start */}
          <Suggestions
            background=""
            category="HTML"
            suggestions={suggestionsHTML}
          />
          {/* Suggestions HTML Section End */}

          {/* Suggestions WP Start */}
          <Suggestions
            background="bg-gray"
            category="WordPress"
            suggestions={suggestionsWP}
          />
          {/* Suggestions WP Section End */}

          {/* Footer Section Start */}
          <div
            className="footer-section section pt-65 pb-50 overlay bg-img"
            data-bg="assets/img/landing/hero-bg.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Make your website come to life quickly.</h1>
                  <a
                    className="buy-btn float-right"
                    href="//themeforest.net/user/hastech/portfolio"
                  >
                    buy Castro
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Section End */}
          {/*====================  scroll top ====================*/}
          <button className="scroll-top" id="scroll-top">
            <i className="ion-android-arrow-up" />
          </button>
          {/*====================  End of scroll top  ====================*/}
        </div>
      </div>
    );
  }
}

export default Demo;
