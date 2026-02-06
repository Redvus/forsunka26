const gulp = require("gulp");
const watch = require("gulp-watch");
const prefixer = require("gulp-autoprefixer");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const rimraf = require("gulp-rimraf");

const path = {
    src: {
        scss: "scss/",
        js: "js/",
        npm: "node_modules/",
    },
    dest: {
        css: "../opencart/catalog/view/theme/forsunka/stylesheet/",
        js: "../opencart/catalog/view/javascript/",
    },
    watch: {
        scss: "scss/",
        js: "js/",
    },
};

/*----------  SCSS  ----------*/

function buildStyles() {
    return (
        gulp
            .src(path.src.scss + "main.scss")
            // .pipe(sass({
            //   silenceDeprecations: ['import']
            // }).on('error', sass.logError))
            .pipe(sourcemaps.init())
            .pipe(sass().on("error", sass.logError))
            // .pipe(
            //     prefixer({
            //         overrideBrowserslist: ["last 4 versions"],
            //         cascade: false,
            //     })
            // )
            .pipe(
                cleanCSS({
                    compatibility: "ie8",
                }),
            )
            .pipe(
                sourcemaps.write(".", {
                    addComment: true,
                    mapFile: function (mapFilePath) {
                        return mapFilePath.replace(".scss", ".map");
                    },
                }),
            )
            .pipe(gulp.dest(path.dest.css))
    );
}

// gulp.task('yoam-scss', function(){
//     return gulp.src(path.src.scss + 'yo-am.scss')
//     // .pipe(sourcemaps.init())
//     .pipe(sass())
//     .pipe(prefixer({
//         overrideBrowserslist: ['last 4 versions'],
//         cascade: false
//     }))
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     // .pipe(sourcemaps.write())
//     .pipe(rename({
//         basename: "yo-am"
//     }))
//     .pipe(gulp.dest(path.dest.css + 'yo-menu/'));
// });

/*----------  JS  ----------*/

function mainJs() {
    return gulp
        .src([
            // path.src.npm + "tiny-slider/dist/" + "tiny-slider.js",
            // path.src.npm + "bxslider/dist/" + "jquery.bxslider.js",
            // path.src.js + "CalendarSearch.js",
            // path.src.js + "Modal.js",
            path.src.js + "main.js",
        ])
        .pipe(concat("main.js"))
        .pipe(terser())
        .pipe(rename({ suffix: "-min" }))
        .pipe(gulp.dest(path.dest.js));
}

function vendorJs() {
    return gulp
        .src([
            // path.src.npm + "gsap/dist/" + "gsap.js",
            // path.src.npm + "gsap/dist/" + "ScrollToPlugin.js",
            // path.src.npm + "gsap/dist/" + "ScrollTrigger.js",
            // path.src.npm +
            //     "photoswipe/dist/" +
            //     "photoswipe-lightbox.esm.min.js",
            // path.src.npm + "photoswipe/dist/" + "photoswipe.esm.min.js",
            // path.src.js + "pagephotoswipe.js",
            // path.src.js + "masterslider-min.js",
            // path.src.npm + "tiny-slider/dist/" + "tiny-slider.js",
            path.src.js + "vendor.js",
        ])
        .pipe(concat("vendor.js"))
        .pipe(terser())
        .pipe(rename({ suffix: "-min" }))
        .pipe(gulp.dest(path.dest.js));
}

function preloaderJs() {
    return gulp
        .src([path.src.js + "preloader.js"])
        .pipe(concat("preloader.js"))
        .pipe(terser())
        .pipe(rename({ suffix: "-min" }))
        .pipe(gulp.dest(path.dest.js));
}

/*----------  Watch  ----------*/

function watchFiles() {
    gulp.watch(path.watch.scss + "*.scss", buildStyles);
    gulp.watch(path.watch.js + "vendor.js", vendorJs);
    gulp.watch(
        [
            path.watch.js + "main.js",
            // path.watch.js + "pagephotoswipe.js",
            // path.src.js + "CalendarSearch.js",
            // path.src.js + "Modal.js",
        ],
        mainJs,
    );
}

exports.watch = watchFiles;

// Для дефолтной задачи:
exports.default = gulp.series(buildStyles, watchFiles);
