const gulp = require('gulp');
const connect = require('gulp-connect'); // Para rodar um servidor de desenvolvimento
const less = require('gulp-less');

// Tarefa 'server': inicia o servidor e habilita livereload
gulp.task('server', function() {
    connect.server({
        root: 'dist',       // Diretório que será servido (ajuste conforme sua estrutura)
        livereload: true,   // Habilita recarregamento automático
        port: 3000          // Porta do servidor
    });
});

gulp.task('styles', function () {
    return gulp.src('./src/styles/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('scripts', function () {
    return gulp.src('./src/scripts/app.js')
        .pipe(gulp.dest('./dist/scripts'));
});

// Tarefa 'reload': recarrega os arquivos HTML do diretório 'dist'
gulp.task('reload', function() {
    return gulp.src('dist/**/*.html')
        .pipe(connect.reload());
});

// Tarefa 'watch': observa mudanças nos arquivos HTML e JS e chama a tarefa 'reload'
gulp.task('watch', function() {
    gulp.watch('dist/**/*.html', gulp.series('reload'));
    gulp.watch('dist/**/*.js', gulp.series('reload'));
});

gulp.task('build', gulp.series('styles', 'scripts'));

// Tarefa padrão: executa 'server' e 'watch' em sequência
gulp.task('default', gulp.series('server', 'watch'));
