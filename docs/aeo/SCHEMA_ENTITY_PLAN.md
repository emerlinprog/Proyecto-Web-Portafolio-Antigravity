# Plan de entidades, evidencia, Schema.org y medición AEO

**Sitio:** `https://orlandolinares.com/`

**Estado:** estrategia activa exclusiva para Orlando + anexo histórico diferido; no autoriza cambios en producción

**Fecha de evaluación:** 2026-07-20

**Principio rector:** ninguna propiedad se publica si no coincide con contenido visible, vigente y respaldado por una fuente identificable.

> Las plantillas de este documento contienen marcadores `{{PLACEHOLDER}}`. Son especificaciones, no JSON-LD listo para producción. Antes de publicar, cada marcador debe sustituirse por un dato verificado o eliminarse junto con su propiedad. Google no garantiza rich results aun cuando el marcado sea válido.

> **ALCANCE ACTIVO DEFINITIVO:** este roadmap cubre exclusivamente `https://orlandolinares.com`. Toda auditoría, `@id`, `SoftwareApplication`, medición y recomendación relacionada con ContrataCheck está **archivada/diferida** en el Anexo histórico A y no forma parte del roadmap activo. ContrataCheck no es requisito, dependencia, proveedor de evidencia ni bloqueo para implementar el perfil, los artículos, breadcrumbs o servicios de Orlando.

## 1. Diagnóstico breve

El objetivo activo es construir una entidad personal coherente para Orlando Linares en `orlandolinares.com`, publicar contenido editorial atribuible y describir servicios reales sin convertir nombres comerciales en organizaciones ficticias. La revisión original no detectó JSON-LD en este sitio; esa condición deberá reconfirmarse en producción antes de implementar.

La estrategia recomendada es **persona primero**:

- Orlando Linares será la entidad `Person` canónica de `orlandolinares.com` cuando exista `/orlando-linares/` con contenido visible y evidencia aprobada.
- `Business Architecture Agency` no tendrá nodo `Organization` ni `@id` organizacional. Podrá evaluarse como `Service` cuando exista una página visible, una prestación real y datos suficientes.
- La portada podrá describirse como `WebSite` personal y enlazar mediante `about` a Orlando sin inventar `publisher`, titularidad o una organización.
- Los futuros artículos enlazarán siempre con el mismo `@id` de persona; no crearán autores duplicados.
- Los servicios podrán describirse de forma mínima, sin métricas no verificadas ni promesas comerciales dentro del schema.
- Ninguna entidad externa o producto es necesario para publicar `Person`, `ProfilePage`, `WebSite`, `Article`/`BlogPosting`, `BreadcrumbList` o el futuro `Service`.

### Estado base del alcance activo

- Dominio canónico confirmado: `https://orlandolinares.com` sin `www`.
- No existen todavía `/orlando-linares/` ni `/articulos/` en la estructura documentada.
- La portada mezcla Orlando Linares y “Business Architecture Agency”; el modelo debe resolverlo sin crear `Organization`.
- Hay páginas visibles de servicios y casos, pero las métricas requieren metodología/fuente antes de reutilizarse en schema.
- No se implementará código en esta fase; primero deben existir páginas y evidencia elegibles.

## 2. Viabilidad técnica, operativa y ROI

### Schema Eligibility & Impact Index

El índice usa exactamente los pesos de la skill: alineación contenido-schema 25, elegibilidad de rich result en Google 25, completitud y exactitud 20, corrección técnica 15, mantenimiento 10 y riesgo de spam/política 5. Es un diagnóstico, no una promesa de visibilidad.

| Plantilla / tipo | Alineación /25 | Rich result Google /25 | Datos /20 | Técnica /15 | Mantenimiento /10 | Riesgo /5 | Total | Veredicto actual |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Portada `/` — `WebSite` | 22 | 7 | 15 | 15 | 9 | 5 | **73** | **Valid but Limited**: apropiado para identidad del sitio; no promete rich result propio |
| `/orlando-linares/` — `ProfilePage` + `Person` | 0 | 0 | 3 | 12 | 8 | 5 | **28** | **Do Not Implement**: la página no existe; falla automática de alineación |
| `/articulos/{slug}/` — `Article`/`BlogPosting` | 0 | 0 | 2 | 12 | 7 | 5 | **26** | **Do Not Implement**: no existen hub ni plantilla editorial |
| Páginas internas — `BreadcrumbList` | 0 | 0 | 0 | 12 | 7 | 5 | **24** | **Do Not Implement**: no hay breadcrumbs visibles verificados en las futuras plantillas |
| `/servicios/` — `Service` | 21 | 3 | 13 | 15 | 8 | 4 | **64** | **High Risk**: tipo sin rich result específico y afirmaciones por depurar |
| Business Architecture Agency — `Service` futuro | 0 | 0 | 3 | 12 | 7 | 5 | **27** | **Do Not Implement**: no hay página/oferta dedicada verificada; falla automática de alineación |

**Lectura del índice activo:** solo `WebSite` supera actualmente el umbral de 70 y su beneficio esperado es semántico. `ProfilePage`, artículos y breadcrumbs no pueden implementarse hasta que existan visiblemente. Los servicios requieren depuración y Business Architecture Agency permanece bloqueado hasta contar con página y oferta real. Ningún puntaje depende de ContrataCheck.

### Umbral proyectado para autorizar una implementación futura

| Plantilla | Condiciones mínimas de salida | Puntaje objetivo |
|---|---|---:|
| `ProfilePage` + `Person` | Página publicada, identidad aprobada, biografía visible, imagen autorizada, perfiles oficiales comprobados y revisión de afirmaciones | ≥ 85 |
| `Article`/`BlogPosting` | Hub y artículo publicados, autor visible, fechas reales, imagen indexable, política editorial y fuente única de contenido | ≥ 85 |
| `BreadcrumbList` | Breadcrumb visible y coherente con canonical y navegación | ≥ 85 |
| `Service` | Página y oferta visibles, relación con Orlando expresada públicamente y afirmaciones sin evidencia retiradas del schema | ≥ 70 |

### Viabilidad y retorno esperado

- **Técnica: alta.** Las plantillas pueden implementarse con el stack existente sin una dependencia nueva.
- **Operativa: media.** El cuello de botella es publicar contenido elegible, gobernar la evidencia de Orlando y mantener autorías, fechas y servicios sincronizados con lo visible.
- **ROI: moderado y gradual.** `ProfilePage`, `Article` y `BreadcrumbList` tienen una oportunidad más clara de elegibilidad en Google. `WebSite` y `Service` aportan principalmente desambiguación semántica. El ROI debe evaluarse con visibilidad, tráfico y conversiones; no con “cantidad de schemas”.
- **AEO:** schema ayuda a reducir ambigüedad, pero no garantiza citas en respuestas generativas. La claridad del contenido, evidencia visible, rastreabilidad, autoridad y frescura son igualmente necesarias.

## 3. Plan de acción

### Fase 0 — Gobierno de evidencia y decisiones

1. Nombrar un propietario del grafo de `orlandolinares.com`.
2. Aprobar nombre público, biografía, título profesional, imagen, perfiles oficiales y áreas demostrables de Orlando.
3. Definir la byline editorial futura: Orlando u otro autor real, siempre visible y coincidente con el schema.
4. Confirmar que Business Architecture Agency seguirá siendo servicio/línea futura, nunca `Organization`.
5. Crear un registro de evidencia con: afirmación, URL donde se muestra, fuente primaria, responsable, fecha de verificación, fecha de próxima revisión y estado (`aprobado`, `pendiente`, `retirado`).

### Fase 1 — Contenido elegible

1. Publicar `/orlando-linares/` como perfil centrado en una sola persona.
2. Publicar `/articulos/` y una plantilla estable `/articulos/{slug}/`.
3. Añadir breadcrumbs visibles a páginas internas antes de crear `BreadcrumbList`.
4. Crear una página dedicada para Business Architecture Agency solo cuando la oferta exista y esté descrita como servicio de Orlando.

### Fase 2 — Implementación controlada futura

1. Implementar `WebSite` y, cuando la página exista, `ProfilePage`/`Person` con `@id` estables.
2. Implementar después `Article`/`BlogPosting` y `BreadcrumbList` desde una fuente editorial única.
3. Evaluar Business Architecture Agency como `Service`, nunca como `Organization`, después de publicar su oferta.
4. Desplegar cualquier cambio en lotes pequeños y medir por tipo/plantilla; este documento no autoriza el despliegue.

## 4. Modelo canónico de entidades y `@id`

### Convención

- Host canónico confirmado: `https://orlandolinares.com`. El proyecto Netlify, la producción, `public/robots.txt` y `public/sitemap.xml` ya están alineados con el dominio sin `www`; todos los identificadores y ejemplos de este plan usan ese host.
- Los `@id` identifican cosas; las URLs sin fragmento identifican páginas.
- Un mismo objeto conserva el mismo `@id` en todo el sitio.
- No crear `Person` nuevas dentro de cada artículo. Referenciar `{"@id":"https://orlandolinares.com/orlando-linares#person"}`.
- No usar rutas `.html` en el grafo hasta confirmar cuáles URLs limpias son las canónicas reales en producción.
- No introducir dependencias o referencias cruzadas a productos externos para completar el grafo personal.

| Entidad | `@id` canónico propuesto | Página principal | Relación |
|---|---|---|---|
| Sitio web | `https://orlandolinares.com/#website` | `https://orlandolinares.com/` | `about` → persona |
| Página de perfil | `https://orlandolinares.com/orlando-linares#profilepage` | `https://orlandolinares.com/orlando-linares` | `mainEntity` → persona; `isPartOf` → sitio |
| Orlando Linares | `https://orlandolinares.com/orlando-linares#person` | `https://orlandolinares.com/orlando-linares` | entidad personal canónica y autónoma del sitio |
| Hub editorial | `https://orlandolinares.com/articulos/#webpage` | `https://orlandolinares.com/articulos/` | `isPartOf` → sitio |
| Artículo | `https://orlandolinares.com/articulos/{{SLUG}}/#article` | URL del artículo | `author` → persona; `isPartOf` → sitio |
| Business Architecture Agency como servicio futuro | `https://orlandolinares.com/servicios/business-architecture-agency/#service` | futura página visible de la oferta | `provider` → persona solo cuando la página lo exprese |

### Grafo conceptual

```text
orlandolinares.com WebSite #website
├── about ──────────────> Person #person
├── hasPart ────────────> ProfilePage #profilepage ── mainEntity ──> Person #person
├── hasPart ────────────> Article #article ────────── author ──────> Person #person
└── futura Service #service ── provider ──> Person #person (solo si es visible)
```

`Business Architecture Agency` no tendrá `Organization @id`. Su único identificador futuro será de tipo `Service` en `orlandolinares.com`, condicionado a una página y oferta visibles. El perfil, los artículos y los servicios de Orlando se implementan de forma autónoma.

## 5. Tipos por plantilla

| Plantilla | Entidad primaria | Entidades secundarias | Uso y restricción |
|---|---|---|---|
| Portada `/` | `WebSite` | referencia a `Person` | Usar para identidad del sitio. No añadir `SearchAction` mientras no exista búsqueda interna real; no promete rich result. |
| `/orlando-linares/` | `ProfilePage` | `Person`, referencia a `WebSite`, `BreadcrumbList` si es visible | La página debe centrarse en Orlando. `Person` contiene solo biografía, imagen, rol, áreas y perfiles visibles/verificados. |
| `/articulos/` | `CollectionPage` opcional, no prioritaria | `BreadcrumbList` si es visible | El requerimiento principal es el hub; no marcar cada tarjeta como artículo completo si su contenido no está en la página. |
| `/articulos/{slug}/` | `BlogPosting` por defecto; `Article` si no es una publicación de blog | `Person`, `WebSite`, `BreadcrumbList` | `headline`, fechas, autor e imagen deben coincidir con la página. No inventar `dateModified`. |
| Página futura Business Architecture Agency | `Service` | referencia a `Person` solo si la prestación por Orlando es visible; `BreadcrumbList` si existe | Nunca `Organization`. Es principalmente semántico; Google no ofrece un rich result genérico de `Service`. |
| Cualquier página interna | entidad propia de la página | `BreadcrumbList` | Solo cuando la ruta de navegación equivalente está visible para usuarios. |

### `Article` vs `BlogPosting`

- Usar `BlogPosting` para publicaciones del centro editorial con voz y fecha de publicación.
- Usar `Article` para piezas editoriales que no se presenten como posts de blog.
- No usar ambos como nodos duplicados. `BlogPosting` ya es subtipo de `Article`.

## 6. Tipos que no deben usarse ahora

| Tipo / propiedad | Decisión | Motivo |
|---|---|---|
| `Organization` para Business Architecture Agency | No usar | La decisión confirmada la define como servicio o futura línea de servicio de Orlando, no como organización independiente. No crear `@id` organizacional. |
| `LocalBusiness` | No usar | No hay evidencia revisada de local físico público, horario o atención presencial. “Lima, Perú” no basta. |
| `Product` | No usar para servicios o herramientas | Requiere un producto/offer real; no convertir consultoría, metodología o prototipo en producto. |
| `Review` / `AggregateRating` | No usar | No hay inventario de valoraciones genuinas, visibles, atribuibles y moderadas. Evitar reseñas autocreadas o calificaciones inferidas. |
| `FAQPage` como táctica de rich result | No usar con expectativa de resultado enriquecido | En el recurso auditado el contenido sí es visible y el schema puede conservarse semánticamente, pero Google restringe su aparición regular a sitios gubernamentales y de salud reconocidos. |
| `HowTo` | No usar | Las páginas revisadas son de oferta/herramienta, no instrucciones completas paso a paso. |
| `Course` / `EducationalOccupationalCredential` | No usar aún | La formación o diplomados no convierten el sitio en proveedor de cursos. Credenciales individuales requieren verificación, emisor y representación visible. |
| `ProfessionalService` | No usar como sustituto de evidencia | Es un subtipo de negocio local y puede implicar una entidad/ubicación comercial no demostrada. |
| `SearchAction` en `WebSite` | No usar | No hay búsqueda interna visible/funcional verificada y el antiguo sitelinks search box no debe ser el objetivo. |
| `award`, `honorificSuffix`, `hasCredential`, `alumniOf` | Bloqueadas hasta evidencia | No inferirlas desde copy promocional; cada valor requiere documento primario y visualización aprobada. |
| `knowsAbout` masivo | No usar como lista de keywords | Solo áreas demostrables y visibles; no repetir todo el catálogo SEO. |
| métricas dentro de `description` | No usar sin soporte | El schema no debe amplificar porcentajes, años, volúmenes o resultados sin metodología y fuente visible. |

## 7. Plantillas JSON-LD con placeholders

Las plantillas siguientes se conservan como **diseño futuro o propuesta de corrección**. No reproducen necesariamente el grafo actual y no deben sustituirlo sin resolver primero los hallazgos de identidad, autoría y provider.

### Reglas de uso de las plantillas

1. Estas muestras son deliberadamente no desplegables mientras contengan `{{PLACEHOLDER}}`.
2. Eliminar una propiedad completa si no existe dato aprobado; no publicar cadenas vacías, `null`, valores tentativos ni placeholders.
3. Serializar desde una fuente de datos única y escapar `<` como `\u003c` al inyectar JSON en React.
4. Cada bloque debe colocarse en la página que describe y coincidir con lo renderizado para usuarios.

### Portada — `WebSite`

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://orlandolinares.com/#website",
  "url": "https://orlandolinares.com/",
  "name": "{{NOMBRE_VISIBLE_Y_APROBADO_DEL_SITIO}}",
  "description": "{{DESCRIPCION_VISIBLE_DEL_SITIO}}",
  "inLanguage": "{{IDIOMA_BCP_47_VERIFICADO}}",
  "about": {
    "@id": "https://orlandolinares.com/orlando-linares#person"
  }
}
```

`about` expresa que el sitio personal tiene a Orlando como entidad central sin afirmar autoría o titularidad. No añadir `publisher`, `creator` ni `copyrightHolder` sin evidencia visible y aprobada.

### Perfil — `ProfilePage` + `Person`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://orlandolinares.com/orlando-linares#profilepage",
      "url": "https://orlandolinares.com/orlando-linares",
      "name": "{{TITULO_VISIBLE_DE_LA_PAGINA}}",
      "description": "{{RESUMEN_VISIBLE_Y_APROBADO}}",
      "inLanguage": "{{IDIOMA_BCP_47_VERIFICADO}}",
      "isPartOf": {
        "@id": "https://orlandolinares.com/#website"
      },
      "mainEntity": {
        "@id": "https://orlandolinares.com/orlando-linares#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://orlandolinares.com/orlando-linares#person",
      "url": "https://orlandolinares.com/orlando-linares",
      "name": "{{NOMBRE_PUBLICO_VERIFICADO}}",
      "description": "{{BIOGRAFIA_VISIBLE_Y_APROBADA}}",
      "jobTitle": "{{TITULO_PROFESIONAL_VISIBLE_Y_APROBADO}}",
      "image": {
        "@type": "ImageObject",
        "url": "{{URL_ABSOLUTA_DE_IMAGEN_AUTORIZADA_E_INDEXABLE}}"
      },
      "sameAs": [
        "{{URL_DE_PERFIL_OFICIAL_VERIFICADO}}"
      ],
      "knowsAbout": [
        "{{AREA_VISIBLE_Y_RESPALDADA}}"
      ]
    }
  ]
}
```

### Artículo — `BlogPosting`

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://orlandolinares.com/articulos/{{SLUG}}/#article",
  "url": "https://orlandolinares.com/articulos/{{SLUG}}/",
  "mainEntityOfPage": "https://orlandolinares.com/articulos/{{SLUG}}/",
  "headline": "{{TITULAR_VISIBLE}}",
  "description": "{{RESUMEN_VISIBLE}}",
  "image": [
    "{{URL_ABSOLUTA_DE_IMAGEN_RELEVANTE_E_INDEXABLE}}"
  ],
  "datePublished": "{{FECHA_REAL_ISO_8601}}",
  "dateModified": "{{FECHA_REAL_DE_MODIFICACION_ISO_8601}}",
  "inLanguage": "{{IDIOMA_BCP_47_VERIFICADO}}",
  "author": {
    "@id": "https://orlandolinares.com/orlando-linares#person"
  },
  "isPartOf": {
    "@id": "https://orlandolinares.com/#website"
  }
}
```

Si nunca hubo una modificación editorial real, eliminar `dateModified` en lugar de copiar o inventar una fecha.

### Breadcrumb visible — `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://orlandolinares.com/articulos/{{SLUG}}/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "{{ETIQUETA_VISIBLE_INICIO}}",
      "item": "https://orlandolinares.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{ETIQUETA_VISIBLE_HUB}}",
      "item": "https://orlandolinares.com/articulos/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{{TITULO_VISIBLE_DEL_ARTICULO}}",
      "item": "https://orlandolinares.com/articulos/{{SLUG}}/"
    }
  ]
}
```

### Business Architecture Agency — `Service` futuro

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://orlandolinares.com/servicios/business-architecture-agency/#service",
  "url": "https://orlandolinares.com/servicios/business-architecture-agency/",
  "name": "Business Architecture Agency",
  "description": "{{DESCRIPCION_VISIBLE_SIN_AFIRMACIONES_NO_VERIFICADAS}}",
  "serviceType": "{{TIPO_VISIBLE_Y_APROBADO_DEL_SERVICIO}}"
}
```

No desplegar esta plantilla hasta que la URL y oferta existan visiblemente. Añadir `provider` con el `@id` de Orlando únicamente si la página identifica expresamente que Orlando presta el servicio. No añadir `areaServed`, `offers` ni alcance global por inferencia.

## 8. Matriz de campos visibles, propiedades y evidencia

| Campo o afirmación visible | Propiedad schema candidata | Fuente mínima de evidencia | Decisión / control |
|---|---|---|---|
| Nombre público de Orlando | `Person.name` | Documento de identidad o CV aprobado por el titular; página de perfil visible | Publicar solo la forma pública aprobada; no completar segundos nombres por inferencia. |
| Título profesional | `Person.jobTitle` | CV vigente + texto exacto visible aprobado | Elegir un título canónico; no mezclar títulos promocionales incompatibles. |
| Biografía | `Person.description` | Biografía aprobada y visible en `/orlando-linares/` | Mantener una fuente única con control de versión. |
| Foto | `Person.image` | Archivo autorizado, URL indexable y la misma imagen visible | Registrar autorización y reemplazos. |
| Perfil de LinkedIn u otro perfil | `Person.sameAs` | Control del perfil y coincidencia inequívoca de identidad | Solo perfiles oficiales verificados; no directorios de terceros por conveniencia. |
| Áreas de experiencia | `Person.knowsAbout` | Casos, experiencia o formación primaria y texto visible | Lista corta; no usar como keywords. |
| Formación / credenciales | `Person.alumniOf` o `hasCredential` | Diploma/certificado original, emisor, nombre y fecha; sección visible | Bloqueado hasta auditoría. No convertir cursos breves en grados. |
| Nombre del sitio personal | `WebSite.name` | Encabezado/title visible y decisión editorial | Debe identificar el centro personal de Orlando; no usar Business Architecture Agency como organización. |
| Entidad central del sitio | `WebSite.about` → `Person @id` | Contenido visible centrado en Orlando | Relación aprobada; no equivale a `creator`, `publisher` o titularidad jurídica. |
| Título del artículo | `headline` | H1 y registro editorial | Coincidencia semántica; evitar titular alterno solo para schema. |
| Resumen del artículo | `description` | Entradilla/meta aprobada y visible o fiel al contenido | Sin afirmaciones adicionales. |
| Fecha de publicación | `datePublished` | Registro automático/inmutable del CMS o repositorio editorial | ISO 8601; no usar fecha de deploy si no fue publicación. |
| Fecha de modificación | `dateModified` | Cambio editorial real registrado | No actualizar por rebuild, CSS o deploy técnico. |
| Autor del artículo | `author` → `Person @id` | Byline visible y aprobación del autor | No atribuir automáticamente todos los textos heredados. |
| Imagen del artículo | `image` | Imagen visible, relevante, autorizada e indexable | Verificar derechos y acceso de crawler. |
| Ruta jerárquica | `BreadcrumbList.itemListElement` | Breadcrumb visible + canonical + navegación | Los tres deben coincidir. |
| Business Architecture Agency | `Service.name`, `description`, `serviceType` | Página futura visible y oferta real aprobada | Es servicio/línea futura; nunca `Organization`. No incluir resultados prometidos. |
| Proveedor de Business Architecture Agency | `Service.provider` | Página que indique expresamente quién presta el servicio y evidencia aprobada | Omitir hasta que sea visible; no inferirlo del nombre o del dominio. |
| Cobertura geográfica | `areaServed` | Política comercial o contratos y texto visible | No inferir “Global Operations”. |
| “7+ años” | Ninguna propiedad genérica recomendable | Cronología laboral primaria, metodología de cómputo y fecha de corte visibles | Mantener fuera del schema salvo representación semántica exacta futura. |
| “200+ solicitudes” | Ninguna propiedad genérica recomendable | Registro del caso, periodo, alcance, responsable y fuente visible | No incluir en `description` schema sin evidencia pública. |
| “12+ diplomados” | Potencial `hasCredential`, uno por uno | Cada diploma/certificado y emisor verificados | Nunca modelar el total sin inventario individual. |
| “2 países” | Ninguna propiedad genérica recomendable | Proyectos/experiencia verificables y periodo | No confundir con `areaServed`. |
| “4 semanas” | Potencial texto de servicio/oferta, no hecho universal | Metodología, alcance, condiciones y evidencia histórica visibles | No presentarlo como garantía. |
| “Opex > 25%” / “Eficiencia +30%” | Ninguna propiedad genérica recomendable | Metodología, línea base, muestra, periodo y fuente primaria | Bloqueado; alto riesgo de afirmación promocional engañosa. |

### Registro mínimo de evidencia

Cada fila aprobada debe tener:

```text
evidence_id | entity_id | field | visible_value | visible_url | primary_source
source_owner | verified_by | verified_at | review_due_at | status | notes
```

Los documentos privados pueden validar internamente una afirmación, pero el schema solo puede expresar lo que también está representado de forma visible y apropiada en la página.

## 9. Proceso de validación

### Antes del despliegue

1. Ejecutar el índice por plantilla. Para markup nuevo, detener cualquier tipo con menos de 70. Para markup ya desplegado con menos de 70, abrir corrección prioritaria y decidir mantener, simplificar o retirar propiedades según evidencia.
2. Confirmar que no queden `{{PLACEHOLDER}}`, valores vacíos, datos de ejemplo ni propiedades sin evidencia.
3. Comparar cada valor con el contenido visible, canonical, idioma e imagen.
4. Validar el bloque con [Schema.org Validator](https://validator.schema.org/) para vocabulario, tipos, propiedades, nesting y resolución del grafo.
5. Validar código o URL de staging con [Google Rich Results Test](https://search.google.com/test/rich-results). Distinguir:
   - “válido en Schema.org”;
   - “tipo detectado pero no elegible para rich result”;
   - “elegible para una función de Google”.
6. Tratar warnings recomendados según su valor real; nunca inventar datos para dejar el test “en verde”.
7. Revisar HTML renderizado y confirmar que el JSON-LD se entrega a crawlers sin depender de una interacción.

### Validaciones del alcance activo

1. Confirmar en producción si `orlandolinares.com` sigue sin JSON-LD antes de preparar el primer lote.
2. Probar cada futura plantilla en Rich Results Test y Schema.org Validator, guardando fecha y resultado.
3. Comparar `Person`, byline, fechas, imágenes y `Service.provider` con contenido visible y evidencia primaria.
4. Confirmar visualmente la ruta de breadcrumbs en desktop y móvil antes de marcarla.

### Después de un despliegue futuro

1. Inspeccionar cada URL representativa con URL Inspection en Search Console y solicitar indexación solo después de validar canonical/renderizado.
2. Confirmar en Search Console que Google leyó la versión desplegada.
3. Revisar informes de mejoras para tipos compatibles. La ausencia de un informe específico para `WebSite` o `Service` no implica por sí sola un error.
4. Revisar el informe de acciones manuales y errores de structured data.
5. Probar en Bing Webmaster Tools la inspección de URL/markup y reenviar sitemap cuando corresponda.
6. Revalidar al cambiar plantilla, identidad, URL, fechas, autor, imagen, servicio o aplicación.

### Checklist de aceptación por URL

- [ ] Índice ≥ 70 y veredicto documentado.
- [ ] JSON válido y sin placeholders.
- [ ] Schema.org Validator sin errores de vocabulario o tipo.
- [ ] Rich Results Test sin errores para funciones Google aplicables.
- [ ] Entidad primaria coincide con el propósito visible de la página.
- [ ] Todas las propiedades tienen evidencia y están visibles.
- [ ] Canonical, `@id`, sitemap y enlaces internos usan el mismo host/ruta.
- [ ] Imágenes son relevantes, autorizadas, indexables y accesibles.
- [ ] Fechas ISO 8601 provienen de eventos editoriales reales.
- [ ] No hay nodos duplicados de persona, organización o aplicación.
- [ ] Search Console confirma rastreo/renderizado tras producción.

Referencias normativas principales: [políticas generales de datos estructurados de Google](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [galería de tipos compatibles de Google](https://developers.google.com/search/docs/appearance/structured-data/search-gallery), [Schema.org](https://schema.org/) y [marcado estructurado en Bing](https://www.bing.com/webmasters/help/marking-up-your-site-with-structured-data-3a93e731).

## 10. Plan de medición para Google, Bing y ChatGPT

### Diseño de medición

Schema no debe desplegarse al mismo tiempo que rediseños extensos si se desea aproximar su efecto. Usar lotes:

1. **Baseline:** registrar el estado de `orlandolinares.com` antes del primer lote y conservar 8–12 semanas cuando el volumen lo permita.
2. **Lote A — identidad personal:** `WebSite` + `ProfilePage`/`Person` en `orlandolinares.com`.
3. **Lote B — editorial:** una cohorte de artículos con `BlogPosting` + breadcrumbs y, si hay suficientes páginas comparables, otra cohorte aún sin marcado durante el mismo periodo.
4. **Lote C — servicio:** Business Architecture Agency como `Service` solo después de publicar su página, sin cambios grandes de copy en la misma fecha.
5. **Ventana inicial:** control técnico a 7 días; lectura preliminar a 28 días; evaluación a 8–12 semanas. Con tráfico bajo, ampliar la ventana y evitar conclusiones porcentuales con muestras pequeñas.

### Google

| Fuente | Métricas | Segmentación | Criterio útil |
|---|---|---|---|
| Search Console — Performance | impresiones, clics, CTR, posición media | URL, consulta, país, dispositivo; marca vs no marca | Cambio frente al baseline y cohorte comparable |
| Search Console — Search appearance | impresiones/clics por apariencia disponible | tipo y URL | Confirmar si realmente apareció una experiencia enriquecida |
| Search Console — URL Inspection / Enhancements | indexación, canonical elegido, errores y URLs válidas | plantilla | Salud técnica, no ROI |
| Analítica web | sesiones orgánicas, landing pages, CTA, formulario iniciado/enviado | `google / organic`, plantilla, página | Conversión posterior a la visita |

No atribuir mejoras de ranking a schema si simultáneamente se crearon `/orlando-linares/`, `/articulos/`, nuevos enlaces internos o contenido. El resultado debe expresarse como contribución observada, no causalidad asegurada.

### Bing

| Fuente | Métricas | Acción |
|---|---|---|
| Bing Webmaster Tools — Search Performance | impresiones, clics, CTR y posición por página/consulta | Comparar baseline y lotes |
| URL Inspection / Site Scan | indexación, crawl y errores de markup | Validar cada plantilla representativa |
| Bing Webmaster Tools — AI Performance, si está disponible en la cuenta | `Total Citations`, páginas citadas y grounding query phrases | Identificar páginas/temas citados y reforzar evidencia/claridad |
| Analítica web | sesiones y conversiones `bing / organic` | Evaluar tráfico de negocio, no solo rastreo |

Bing anunció `AI Performance` en vista previa pública en 2026; su disponibilidad y definiciones deben reconfirmarse al implementar. IndexNow puede considerarse en otra fase para notificar altas/cambios, pero no forma parte de este documento ni autoriza cambios de código.

### Referencias desde ChatGPT

| Señal | Cómo medir | Limitación |
|---|---|---|
| Tráfico referido | Analítica: `utm_source=chatgpt.com`; complementar con referrer/source que contenga `chatgpt.com` | Solo mide clics, no todas las menciones o impresiones |
| Landing y conversión | Landing page, CTA, formulario y conversión de sesiones ChatGPT | Volumen bajo puede impedir conclusiones |
| Disponibilidad para búsqueda | Verificar que `OAI-SearchBot` no esté bloqueado y que las páginas sean públicas/indexables | Accesibilidad no garantiza inclusión ni posición |
| Muestreo cualitativo | Panel fijo de 15–20 consultas no personalizadas sobre persona, servicios, casos y temas; registrar fecha, modelo/superficie, respuesta, URL citada y exactitud | Las respuestas varían; no tratarlo como ranking estable |
| Exactitud de entidad | Registrar si Orlando se identifica como persona y si Business Architecture Agency se interpreta correctamente como servicio | La medición comprueba la claridad del modelo personal sin depender de productos externos |

OpenAI indica que las referencias de ChatGPT incorporan `utm_source=chatgpt.com` y que la inclusión requiere permitir `OAI-SearchBot`; véase la [FAQ oficial para publishers y developers](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) y [ChatGPT Search](https://help.openai.com/en/articles/9237897-chatgpt-search). Estas señales no prueban que JSON-LD haya causado una cita.

### Tablero mínimo mensual

```text
periodo | dominio | entidad | lote_schema | urls_validas | errores_schema | impresiones_google
clics_google | ctr_google | impresiones_bing | clics_bing | citas_ai_bing
sesiones_chatgpt | conversiones_chatgpt | menciones_nombre_anterior
errores_de_entidad_detectados
cambios_de_contenido | observaciones
```

**KPIs principales:** URLs elegibles sin error, clics orgánicos no-branded hacia perfil/artículos, conversiones desde esas landing pages, citas AI de Bing cuando estén disponibles y sesiones/conversiones con `utm_source=chatgpt.com`.

**Guardrails:** cero propiedades sin evidencia, cero identidades duplicadas y cero métricas del schema desincronizadas de lo visible.

## 11. Riesgos de política y mantenimiento

| Riesgo | Severidad | Control |
|---|---|---|
| Marcar contenido no visible o una página que aún no existe | Crítica | Gate automático de alineación; puntaje 0 en la categoría y no implementar. |
| Representar Business Architecture Agency como `Organization` | Alta | La decisión la define como servicio/línea futura; prohibir `Organization @id` y evaluar `Service` solo con oferta visible. |
| Amplificar estadísticas sin metodología/fuente | Alta | Excluir del schema; crear registro de evidencia y mostrar contexto público antes de considerar su uso. |
| Autores, cargos, formación o perfiles inventados | Alta | Aprobación del titular y fuente primaria por campo. |
| Reseñas propias o valoraciones no genuinas | Crítica | No usar `Review`/`AggregateRating` sin proceso verificable y cumplimiento de política. |
| Schema válido pero no compatible con rich result | Media | Google primero; documentar diferencia entre semántica Schema.org y elegibilidad Google. |
| Desincronización entre React, HTML y datos estructurados | Alta | Fuente única de datos, tests por plantilla y revisión tras cada cambio de contenido. |
| Fechas modificadas en cada build | Media | Separar fecha editorial de fecha técnica; actualizar solo ante cambio sustantivo. |
| Imágenes bloqueadas, irrelevantes o sin derechos | Media | URL Inspection, autorización y correspondencia visual. |
| Sobre-markup | Media | Una entidad primaria por página; añadir solo nodos con finalidad clara. |
| Dependencia de resultados generativos variables | Media | Medir clics/citas y exactitud; no garantizar presencia en Google, Bing o ChatGPT. |
| Cambios futuros en políticas | Alta | Revisión trimestral y antes de cada lote contra documentación oficial vigente. |

### Gobierno de mantenimiento

- **Responsable de negocio:** aprueba identidad, servicios, productos, biografía y afirmaciones.
- **Responsable editorial:** aprueba titulares, autores, fechas, imágenes y modificaciones.
- **Responsable técnico:** conserva `@id`, valida templates y monitorea errores.
- **Cadencia:** revisión trimestral; revisión inmediata ante renombre, cambio de dominio/ruta, nueva credencial, actualización de precio, retiro de producto o modificación sustantiva de artículo.
- **SLA sugerido:** corregir errores críticos de datos estructurados en 2 días hábiles; retirar de inmediato propiedades engañosas o desactualizadas.
- **Registro:** cada cambio de schema debe enlazar con su evidencia y con la modificación visible que lo justifica.

## 12. Archivos a revisar o modificar en una fase futura

Este documento no autoriza cambios. Una implementación posterior deberá inspeccionar, como mínimo:

- `index.html` y la composición de `src/App.tsx` para la portada.
- La futura plantilla/ruta `/orlando-linares/`.
- La futura fuente de contenido y plantilla `/articulos/{slug}/`.
- `servicios.html`, `ai_lab.html`, la futura página de Business Architecture Agency y sus canonical.
- `site-nav.js`, `vite.config.ts`, `sitemap.xml` y `robots.txt` para coherencia de descubrimiento y rutas.
- La fuente única futura de datos estructurados y su prueba automatizada.

`src/components/HeroSection.tsx` queda explícitamente fuera del alcance y no debe tocarse en este trabajo.

## 13. Cambios propuestos o realizados

**Realizado:** únicamente este plan documental.

**No realizado:** inserción de JSON-LD, cambios de contenido, HTML, TSX, configuración, sitemap, robots, analítica, deploy, commit o push.

## 14. Comandos a ejecutar en una fase autorizada

No hay comandos de implementación o despliegue autorizados en esta sesión. En una fase futura, el flujo mínimo será:

```powershell
npm run build
```

Luego se validarán las URLs de staging manualmente con Schema.org Validator y Rich Results Test. El build no sustituye la validación semántica ni la revisión de evidencia.

## 15. Validaciones de este entregable

- [x] Se calculó el Schema Eligibility & Impact Index por plantilla.
- [x] Se detuvo la recomendación de implementación para tipos con puntaje menor de 70.
- [x] Se definió una entidad canónica de persona y `@id` reutilizables.
- [x] Se limitó el índice activo y el roadmap a `orlandolinares.com`.
- [x] Se confirmó que el perfil, artículos y servicios de Orlando no dependen de productos externos.
- [x] Se diferenció soporte Schema.org de elegibilidad de rich results de Google.
- [x] Se proporcionaron plantillas con placeholders explícitos y advertencia de no despliegue.
- [x] Se creó la matriz visible ↔ schema ↔ evidencia.
- [x] Se incluyó validación Google, Schema.org, Search Console y Bing.
- [x] Se incluyó medición para Google, Bing y referencias desde ChatGPT.
- [x] Se documentaron riesgos de política y mantenimiento.
- [x] Se conservó la investigación diferida de ContrataCheck en el Anexo histórico A.
- [x] No se modificó producción ni `src/components/HeroSection.tsx`.

## 16. Riesgos o pendientes operativos

1. Confirmar el estado JSON-LD actual de `orlandolinares.com` en producción.
2. Crear y aprobar `/orlando-linares/` antes de publicar `ProfilePage`/`Person`.
3. Crear `/articulos/` y una plantilla con byline, fechas e imágenes gobernadas.
4. Añadir breadcrumbs visibles antes de `BreadcrumbList`.
5. Publicar una oferta real de Business Architecture Agency antes de evaluarla como `Service`.
6. Auditar estadísticas visibles con metodología, periodo, fuente y responsable.

## Anexo histórico A — ContrataCheck (archivado y diferido)

> **Estado del anexo:** investigación conservada únicamente como referencia histórica. No pertenece al alcance activo, no genera dependencias para Orlando, no debe incluirse en lotes de implementación o medición y no autoriza cambios en `contratacheck.com`.

### Auditoría pública archivada del 2026-07-20

- `https://contratacheck.com/` respondió 200 con title, meta description, Open Graph y canonical sin `www`.
- `https://www.contratacheck.com/` también respondió 200 sin redirección; el canonical apuntaba a la versión sin `www`.
- Home entregó un `@graph` parseable con:
  - `Organization` `https://contratacheck.com/#organization`, con `founder → #founder`;
  - `Person` `https://contratacheck.com/#founder`, URL `https://orlandolinares.com` y `sameAs` de LinkedIn;
  - `WebSite` `https://contratacheck.com/#website`, con `publisher → #organization`;
  - `SoftwareApplication` ContrataCheck sin `@id`, con `provider → #organization`.
- El contenido visible decía “Producto desarrollado por Orlando Linares”. Esa frase acredita participación en desarrollo, pero no equivale necesariamente a fundar una organización, ser provider, publisher o titular jurídico.
- El nodo `SoftwareApplication` auditado no incluía `offers`, `review` ni `aggregateRating`; por ello no cumplía los requisitos documentados por Google para el rich result de software.
- AsistenteOECE no aparecía visible ni en el JSON-LD auditado. Se documentó como denominación anterior del mismo proyecto, nunca como segunda aplicación; `alternateName` quedaba condicionado a explicar públicamente la transición.
- El recurso `https://contratacheck.com/recursos/impedimentos-contratar-estado` entregó `Organization`, `Person`, `Article`, `BreadcrumbList` y `FAQPage`.
- `Article.author` y `publisher` apuntaban a `#organization`; no se detectó una byline visible que identificara a ContrataCheck como autor.
- La fecha visible coincidía con `datePublished`/`dateModified` y las dos preguntas/respuestas del FAQ coincidían con el JSON-LD.
- El `BreadcrumbList` era parseable; quedó pendiente confirmar su equivalencia visual exacta.

### Índice histórico archivado

| Plantilla / tipo auditado | Alineación /25 | Rich result /25 | Datos /20 | Técnica /15 | Mantenimiento /10 | Riesgo /5 | Total | Veredicto histórico |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Home — identidad `Organization` + `Person` + `WebSite` | 16 | 11 | 14 | 15 | 8 | 3 | **67** | **High Risk** |
| Home — `SoftwareApplication` semántico | 23 | 5 | 15 | 14 | 8 | 4 | **69** | **High Risk** |
| Home — elegibilidad Google de software | 23 | 0 | 3 | 14 | 6 | 4 | **50** | **Do Not Implement / no elegible** |
| Recurso — `Article` | 14 | 16 | 12 | 15 | 7 | 3 | **67** | **High Risk** |
| Recurso — `BreadcrumbList` | 18 | 18 | 16 | 15 | 8 | 4 | **79** | **Valid but Limited** |
| Recurso — `FAQPage` | 25 | 2 | 18 | 15 | 8 | 5 | **73** | **Valid but Limited**, sin expectativa regular de rich result |

### Hallazgos y recomendaciones históricas diferidas

1. Verificar si ContrataCheck representa realmente una `Organization` o solo producto/marca antes de conservar publisher/provider/founder.
2. No equiparar “desarrollado por Orlando” con `Organization.founder`; mapear el rol exacto solo con evidencia.
3. Añadir un `@id` estable `https://contratacheck.com/#softwareapplication` si el trabajo se reanuda.
4. Mostrar la byline real o corregir `Article.author`; author y publisher no son sinónimos.
5. Mantener FAQ sincronizada con el contenido visible y confirmar breadcrumbs visuales.
6. No fabricar `offers`, precio, reseñas ni ratings para perseguir elegibilidad.
7. Consolidar `www` hacia el canonical sin `www` mediante 301/308.
8. Mantener cualquier medición, Search Console y baseline separados de `orlandolinares.com`.

### Plantilla histórica conservada — `SoftwareApplication`

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://contratacheck.com/#softwareapplication",
  "url": "https://contratacheck.com/",
  "name": "ContrataCheck",
  "alternateName": "{{ASISTENTEOECE_SOLO_SI_LA_TRANSICION_ES_VISIBLE}}",
  "description": "{{DESCRIPCION_VISIBLE_DE_LA_APLICACION}}",
  "applicationCategory": "{{CATEGORIA_SCHEMA_ORG_VERIFICADA}}",
  "operatingSystem": "{{PLATAFORMA_O_SISTEMA_VISIBLE_Y_CORRECTO}}"
}
```

La plantilla queda congelada. El placeholder `alternateName` debe eliminarse mientras la transición no sea visible. No añadir `creator`, `provider`, `publisher`, `maintainer`, `copyrightHolder`, `offers`, precio, `aggregateRating`, `review`, versión o gratuidad sin evidencia visible. Reactivar este anexo requiere una nueva decisión explícita de alcance.

## 17. Siguiente paso sugerido

Redactar y aprobar `/orlando-linares/` con su inventario de evidencia. Después recalcular `ProfilePage`/`Person`; solo si alcanza 70 o más, preparar el primer lote JSON-LD para staging junto con `WebSite`.
