--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Ubuntu 15.2-1.pgdg22.04+1)
-- Dumped by pg_dump version 15.2 (Ubuntu 15.2-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: PatientDisease; Type: TABLE; Schema: public; Owner: peter
--

CREATE TABLE public."PatientDisease" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "patientId" integer NOT NULL,
    "diseaseId" integer NOT NULL
);


ALTER TABLE public."PatientDisease" OWNER TO peter;

--
-- Name: diseases; Type: TABLE; Schema: public; Owner: peter
--

CREATE TABLE public.diseases (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.diseases OWNER TO peter;

--
-- Name: diseases_id_seq; Type: SEQUENCE; Schema: public; Owner: peter
--

CREATE SEQUENCE public.diseases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.diseases_id_seq OWNER TO peter;

--
-- Name: diseases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peter
--

ALTER SEQUENCE public.diseases_id_seq OWNED BY public.diseases.id;


--
-- Name: doctors; Type: TABLE; Schema: public; Owner: peter
--

CREATE TABLE public.doctors (
    id integer NOT NULL,
    name character varying(255),
    lastname character varying(255),
    n_identification character varying(255),
    email character varying(255),
    password character varying(255) DEFAULT NULL::character varying,
    phone character varying(255),
    gender character varying(255),
    modulo json[] DEFAULT ARRAY[]::json[],
    rol json[] DEFAULT ARRAY['{"id":2,"name":"doctor"}'::json],
    "isAdmin" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.doctors OWNER TO peter;

--
-- Name: doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: peter
--

CREATE SEQUENCE public.doctors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctors_id_seq OWNER TO peter;

--
-- Name: doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peter
--

ALTER SEQUENCE public.doctors_id_seq OWNED BY public.doctors.id;


--
-- Name: modulesPrincipals; Type: TABLE; Schema: public; Owner: peter
--

CREATE TABLE public."modulesPrincipals" (
    id integer NOT NULL,
    name character(1) NOT NULL,
    address text NOT NULL,
    phone character(1) NOT NULL,
    created_at timestamp with time zone NOT NULL
);


ALTER TABLE public."modulesPrincipals" OWNER TO peter;

--
-- Name: modulesPrincipals_id_seq; Type: SEQUENCE; Schema: public; Owner: peter
--

CREATE SEQUENCE public."modulesPrincipals_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."modulesPrincipals_id_seq" OWNER TO peter;

--
-- Name: modulesPrincipals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peter
--

ALTER SEQUENCE public."modulesPrincipals_id_seq" OWNED BY public."modulesPrincipals".id;


--
-- Name: patients; Type: TABLE; Schema: public; Owner: peter
--

CREATE TABLE public.patients (
    id integer NOT NULL,
    patient_name character varying(255),
    patient_lastname character varying(255),
    n_identification character varying(255),
    age integer,
    phone character varying(255),
    address text,
    gender character varying(255),
    date date,
    disease_ids json[] DEFAULT ARRAY[]::json[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.patients OWNER TO peter;

--
-- Name: patients_id_seq; Type: SEQUENCE; Schema: public; Owner: peter
--

CREATE SEQUENCE public.patients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patients_id_seq OWNER TO peter;

--
-- Name: patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peter
--

ALTER SEQUENCE public.patients_id_seq OWNED BY public.patients.id;


--
-- Name: diseases id; Type: DEFAULT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.diseases ALTER COLUMN id SET DEFAULT nextval('public.diseases_id_seq'::regclass);


--
-- Name: doctors id; Type: DEFAULT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.doctors ALTER COLUMN id SET DEFAULT nextval('public.doctors_id_seq'::regclass);


--
-- Name: modulesPrincipals id; Type: DEFAULT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public."modulesPrincipals" ALTER COLUMN id SET DEFAULT nextval('public."modulesPrincipals_id_seq"'::regclass);


--
-- Name: patients id; Type: DEFAULT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.patients_id_seq'::regclass);


--
-- Data for Name: PatientDisease; Type: TABLE DATA; Schema: public; Owner: peter
--

COPY public."PatientDisease" ("createdAt", "updatedAt", "patientId", "diseaseId") FROM stdin;
\.


--
-- Data for Name: diseases; Type: TABLE DATA; Schema: public; Owner: peter
--

COPY public.diseases (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: peter
--

COPY public.doctors (id, name, lastname, n_identification, email, password, phone, gender, modulo, rol, "isAdmin", "createdAt", "updatedAt") FROM stdin;
15	adriana	De acosta	V-18971831	moncadaadriana2@gmail.com	$2b$10$Y8fsE2BHFwkzJlvtmDWSBeD7DyRNz6HeWJqS0aAgHYDHdDgV7pU9a	04243709647	Femenino	{}	{"{\\"id\\":2,\\"name\\":\\"doctor\\"}"}	f	2023-06-30 01:52:20.846-04	2023-06-30 01:52:20.846-04
16	pedro	acosta	V-28176538	pedroj4567@gmail.com	$2b$10$8mISAOtlX52p0rBsH6ax2O.Mxftk1aAr131AOt4eHgtb/JywWMk9.	04243709647	Masculino	{}	{"{\\"id\\":2,\\"name\\":\\"doctor\\"}"}	t	2023-07-02 22:11:36.058-04	2023-07-02 22:20:53.66-04
17	admin	admin	0000000	admin@admin.com	$2b$10$bfbWAPINkbyDPYGDKS8ZROZa2X1JZXtZLNLDw0WAygWvs7FKU7e92	04243709647	Femenino	{}	{"{\\"id\\":2,\\"name\\":\\"doctor\\"}"}	t	2023-07-04 12:46:10.476-04	2023-07-04 12:46:10.476-04
\.


--
-- Data for Name: modulesPrincipals; Type: TABLE DATA; Schema: public; Owner: peter
--

COPY public."modulesPrincipals" (id, name, address, phone, created_at) FROM stdin;
\.


--
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: peter
--

COPY public.patients (id, patient_name, patient_lastname, n_identification, age, phone, address, gender, date, disease_ids, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: diseases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peter
--

SELECT pg_catalog.setval('public.diseases_id_seq', 1, false);


--
-- Name: doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peter
--

SELECT pg_catalog.setval('public.doctors_id_seq', 17, true);


--
-- Name: modulesPrincipals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peter
--

SELECT pg_catalog.setval('public."modulesPrincipals_id_seq"', 1, false);


--
-- Name: patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peter
--

SELECT pg_catalog.setval('public.patients_id_seq', 1, false);


--
-- Name: PatientDisease PatientDisease_pkey; Type: CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public."PatientDisease"
    ADD CONSTRAINT "PatientDisease_pkey" PRIMARY KEY ("patientId", "diseaseId");


--
-- Name: diseases diseases_pkey; Type: CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.diseases
    ADD CONSTRAINT diseases_pkey PRIMARY KEY (id);


--
-- Name: doctors doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (id);


--
-- Name: modulesPrincipals modulesPrincipals_pkey; Type: CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public."modulesPrincipals"
    ADD CONSTRAINT "modulesPrincipals_pkey" PRIMARY KEY (id);


--
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (id);


--
-- Name: PatientDisease PatientDisease_diseaseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public."PatientDisease"
    ADD CONSTRAINT "PatientDisease_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES public.diseases(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: PatientDisease PatientDisease_patientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: peter
--

ALTER TABLE ONLY public."PatientDisease"
    ADD CONSTRAINT "PatientDisease_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES public.patients(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

