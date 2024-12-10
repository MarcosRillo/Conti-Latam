import Image from "next/image";

export default function Tool4Page() {
  return (
    <div className="container mx-auto mt-20 px-10 py-4 md:my-32 md:mx-5 lg:mx-auto bg-white w-full">
      <header className="md:mt-10">
        <h1 className="text-2xl text-start text-black leading-tight">
          Aumentar la eficiencia es{" "}
          <strong>reducir a menos de la mitad los tiempos de gestión </strong>de
          abstracts en tus eventos
        </h1>
        <div className="">
          <Image
            src="/images/tool4/image1.jpg"
            alt="Concepto de adaptación"
            width={931}
            height={387}
          />
        </div>
      </header>
      <section>
        <h2 className="text-lg font-bold pt-10 pb-6 text-gray-500">
          Time Lines de Prestación
        </h2>
        <div>
          <Image
            src="/images/tool4/image2.png"
            alt="Times lines de Presentacion"
            width={796}
            height={228}
          />
        </div>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Modelo de gestión colaborativa
        </h3>
        <p className="text-black font-extralight mt-4">
          La principal característica de nuestra plataforma de gestión de
          Trabajos Científicos es que ha sido concebida bajo el modelo de
          economías colaborativas. Esto implica construir grandes cosas con la
          suma de pequeños esfuerzos individuales organizados por cooperación de
          comunidades. Así, cada actor del ecosistema de Abstract, aporta una
          parte del trabajo para que el esfuerzo se distribuya y los
          Organizadores incrementen significativamente su productividad y la
          calidad final del trabajo resultante.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Campos múltiples variables
        </h3>
        <p className="text-black font-extralight mt-4">
          Los campos de datos necesarios para administrar los Temas Libres se
          dividen en fijos y variables. Datos como título, tema, autor,
          coautores, áreas temáticas, entre otros, estándares. Pero los campos
          variables pueden ser en múltiples formatos posibles: texto, números
          enteros o racionales, listas de selección simples o múltiple,
          checkbox, radiobutton, y campos predefinidos como documentos de
          identidad o pasaportes, nombres, apellidos, emails, teléfonos fijos y
          móviles. Además para cada campo se pueden definir atributos de
          aspecto, formato, longitud, información, instrucciones de uso,
          etcétera.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Secciones condicionales
        </h3>
        <p className="text-black font-extralight mt-4">
          Nuestras múltiples experiencias en la gestión de Abstract nos ha
          permitido una mirada de mucha amplitud y diversidad. Esto nos permitió
          entender que cada industria o actividad tiene particularidades propias
          que no aplican a otras áreas. Y la solución para que nuestra
          plataforma se adapte a cada requerimiento es gestionar secciones
          condicionales específicas.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Longitud de campos mínima y máxima
        </h3>
        <p className="text-black font-extralight mt-4">
          Una de las necesidades particulares en la Gestión de Trabajos
          Científicos pasa por acotar con precisión el largo de los campos de
          datos específicos. Así contamos con la posibilidad de indicar
          extensiones mínimas y máximas, tanto en palabras como en caracteres, y
          para todos los campos.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Gestión de plazos para cada etapa
        </h3>
        <p className="text-black font-extralight mt-4">
          El proceso de administración de Temas Libres requiere un riguroso
          control de plazos para sus etapas: presentación, asignación de
          evaluadores, evaluación de trabajos, comunicación de resultados, y
          exposición de los trabajos aprobados y postulados a premio. Nuestra
          plataforma de Abstract se estructura a partir de este timeline del
          etapas con fechas y horarios de inicio y cierre para cada proceso.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Administración de múltiples trabajos
        </h3>
        <p className="text-black font-extralight mt-4">
          La plataforma de Gestión de Trabajos Científicos permite administrar
          múltiples trabajos de un mismo autor. Permite indicar la cantidad de
          mínima y máxima que cada presentador puede postular.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Administración de áreas temáticas
        </h3>
        <p className="text-black font-extralight mt-4">
          Un aspecto estructural en la plataforma de Trabajos Libres son las
          Áreas Temáticas. Éste agrupador, además de organizar los trabajos
          presentados, da sentido de lógica a la asignación de evaluadores y
          asegura una distribución adecuada en el esfuerzo de evaluación.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Gestión de evaluadores por áreas temáticas
        </h3>
        <p className="text-black font-extralight mt-4">
          La gestión de Temas Libres dispone de un módulo completo para
          administrar los Evaluadores con sus áreas temáticas y disponibilidad
          de esfuerzo de evaluación por cantidad mínima y máxima de trabajos
          asignables.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Distribución manual o automática de trabajos
        </h3>
        <p className="text-black font-extralight mt-4">
          La plataforma de Abstract permite elegir entre una asignación de
          trabajos en evaluadores por medios manuales, o usando el módulo de
          asignación automática que administra diversas restricciones para
          alcanzar un alto grado de efectividad en el resultado.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Gestión integral de criterios de evaluación
        </h3>
        <p className="text-black font-extralight mt-4">
          El administrador de Trabajos Científicos cuenta con un módulo para la
          generación de la tabla de Criterios de Evaluación. Esta herramienta da
          libertad total para crear sistemas de puntuación específicos y
          personalizados. Administra puntajes mínimos, máximos, de aprobación, y
          de premiación. A la vez que permite incluir un texto nivelatorio para
          cada uno de los criterios a fin de estandarizar los criterios de
          puntuación entre todos los evaluadores.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Calificación manual o automática de trabajos
        </h3>
        <p className="text-black font-extralight mt-4">
          El proceso de calificación de Trabajos Científicos puede ser realizado
          en forma manual o automática según sea la preferencia de comité.
          Cuando se activa el modo automático, tanto la calificación como el
          mail de respuesta al Autor se procesan automáticamente, en tanto que
          en modo manual, cada acción la realiza el administradores de la
          plataforma al que se le haya otorgado permiso.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Slider web automático para exposición de trabajos
        </h3>
        <p className="text-black font-extralight mt-4">
          Una funcionalidad muy útil es el slider de trabajos, una vez concluído
          el período de clasificación, se puede activar esta funcionalidad que
          va presentando los trabajos en una pantalla tipo e-posters, en un
          orden indicado, por un período de tiempo preestablecido, y que además
          tiene un explorador para encontrar trabajos por cualquier clave de
          búsqueda dada.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Exportaciones en formatos gráficos para e-posters
        </h3>
        <p className="text-black font-extralight mt-4">
          Los Abstract subidos a la plataforma pueden ser exportados en formato
          gráficos para facilitar la tarea de presentación mediante la modalidad
          de e-posters.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Generador de plantillas de e-mails
        </h3>
        <p className="text-black font-extralight mt-4">
          Nuestra plataforma de Gestión de Temas Libres es básicamente un
          sistema de comunicación que debe optimizar el intercambio de
          información entre todos los integrantes del ecosistema, por lo tanto
          se puso especial atención al generador de modelos de mails, dotándolo
          de simpleza y versatilidad para permitir un buen intercambio.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Motor de envío de e-mails multipropósito
        </h3>
        <p className="text-black font-extralight mt-4">
          El motor de envíos de mails es la herramienta que se ocupa de
          programar las campañas de comunicación, asociando una plantilla de
          contenidos, e indicando fecha, hora, y velocidad de los envíos, el
          proceso se realiza en forma completamente automática y desasistida.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Plataforma de autogestión
        </h3>
        <p className="text-black font-extralight mt-4">
          Los administradores del evento tendrán acceso a la plataforma de
          autogestión para poder administrar todas las características de los
          servicios en curso.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Panel de indicadores de progreso
        </h3>
        <p className="text-black font-extralight mt-4">
          La plataforma cuenta con una barra de indicadores que expone en todo
          momento variables que permiten medir progresos y avances. cantidad de
          trabajos, cantidad de trabajos por área temáticas, cantidad de
          trabajos por estado de calificación, cantidad de evaluadores, cantidad
          de trabajos por evaluador, entre otros indicadores disponibles.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Certificación de integrantes del programa
        </h3>
        <p className="text-black font-extralight mt-4">
          El módulo de certificación de trabajos científicos es una herramienta
          muy potente en términos de ahorros de tiempos. Usando el motor de
          maquetación, se pueden diseñar distintos tipos de documentos, que
          pueden ser enviados usando el motor de envío de mails, o bien
          descargados desde la web del evento para generar tráfico.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Configuración de procesos manuales o automáticos
        </h3>
        <p className="text-black font-extralight mt-4">
          Para cada acción que se realiza en la plataforma se disparan sub
          procesos que pueden ser configurados en modo automático o manual.
          Estos procesos pueden ser envíos de mails, cierres de presentación de
          abstract, restricción de accesos, bloqueos por calificación de
          trabajos, entre otros. Y los administradores determinarán qué ocurre
          en automático, y qué realizar manualmente.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Exportación de todos los datos
        </h3>
        <p className="text-black font-extralight mt-4">
          Absolutamente toda la información de la plataforma se puede exportar
          en múltiples formatos reconocidos por Microsoft Office o G-Suite de
          Google.
        </p>
      </section>
      <section className="my-12">
        <h3 className="text-md font-semibold text-gray-500">
          Gestión de permisos individuales
        </h3>
        <p className="text-black font-extralight mt-4">
          El nivel de acceso y operatividad de cada usuario puede ser
          parametrizado individualmente mediante permisos simples o perfiles
          predefinidos y configurables.
        </p>
      </section>
    </div>
  );
}
