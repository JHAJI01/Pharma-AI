export interface Medicine {
  id: number;
  genericName: string;
  brandNames: string[];
  primaryUse: string;
  category: string;
  commonSideEffects: string[];
}

export const medicines: Medicine[] = [
  {
    id: 1,
    genericName: "Acetaminophen",
    brandNames: ["Tylenol", "Panadol"],
    primaryUse: "Pain relief and fever reduction",
    category: "Analgesic",
    commonSideEffects: ["Nausea", "Liver damage (with overdose)", "Rash"]
  },
  {
    id: 2,
    genericName: "Ibuprofen",
    brandNames: ["Advil", "Motrin", "Nurofen"],
    primaryUse: "Pain relief, inflammation reduction, fever reduction",
    category: "NSAID",
    commonSideEffects: ["Stomach pain", "Heartburn", "Dizziness", "Increased blood pressure"]
  },
  {
    id: 3,
    genericName: "Aspirin",
    brandNames: ["Bayer", "Ecotrin"],
    primaryUse: "Pain relief, fever reduction, blood thinner",
    category: "NSAID",
    commonSideEffects: ["Stomach irritation", "Bleeding", "Ringing in ears"]
  },
  {
    id: 4,
    genericName: "Amoxicillin",
    brandNames: ["Amoxil", "Trimox"],
    primaryUse: "Bacterial infections",
    category: "Antibiotic",
    commonSideEffects: ["Diarrhea", "Nausea", "Rash", "Yeast infections"]
  },
  {
    id: 5,
    genericName: "Lisinopril",
    brandNames: ["Prinivil", "Zestril"],
    primaryUse: "High blood pressure, heart failure",
    category: "ACE Inhibitor",
    commonSideEffects: ["Cough", "Dizziness", "Headache", "Fatigue"]
  },
  {
    id: 6,
    genericName: "Atorvastatin",
    brandNames: ["Lipitor"],
    primaryUse: "High cholesterol",
    category: "Statin",
    commonSideEffects: ["Muscle pain", "Digestive problems", "Liver enzyme abnormalities"]
  },
  {
    id: 7,
    genericName: "Metformin",
    brandNames: ["Glucophage", "Fortamet"],
    primaryUse: "Type 2 diabetes",
    category: "Biguanide",
    commonSideEffects: ["Nausea", "Diarrhea", "Stomach upset", "Metallic taste"]
  },
  {
    id: 8,
    genericName: "Omeprazole",
    brandNames: ["Prilosec"],
    primaryUse: "Acid reflux, stomach ulcers",
    category: "Proton Pump Inhibitor",
    commonSideEffects: ["Headache", "Nausea", "Diarrhea", "Stomach pain"]
  },
  {
    id: 9,
    genericName: "Levothyroxine",
    brandNames: ["Synthroid", "Levoxyl"],
    primaryUse: "Hypothyroidism",
    category: "Thyroid Hormone",
    commonSideEffects: ["Weight changes", "Hair loss", "Nervousness", "Insomnia"]
  },
  {
    id: 10,
    genericName: "Albuterol",
    brandNames: ["ProAir", "Ventolin"],
    primaryUse: "Asthma, COPD",
    category: "Bronchodilator",
    commonSideEffects: ["Nervousness", "Tremor", "Headache", "Fast heartbeat"]
  },
  {
    id: 11,
    genericName: "Hydrochlorothiazide",
    brandNames: ["Microzide"],
    primaryUse: "High blood pressure, fluid retention",
    category: "Diuretic",
    commonSideEffects: ["Dizziness", "Low potassium", "Increased urination", "Dehydration"]
  },
  {
    id: 12,
    genericName: "Sertraline",
    brandNames: ["Zoloft"],
    primaryUse: "Depression, anxiety disorders",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Insomnia", "Sexual dysfunction", "Weight changes"]
  },
  {
    id: 13,
    genericName: "Simvastatin",
    brandNames: ["Zocor"],
    primaryUse: "High cholesterol",
    category: "Statin",
    commonSideEffects: ["Muscle pain", "Digestive problems", "Headache", "Liver enzyme abnormalities"]
  },
  {
    id: 14,
    genericName: "Losartan",
    brandNames: ["Cozaar"],
    primaryUse: "High blood pressure",
    category: "ARB",
    commonSideEffects: ["Dizziness", "Back pain", "Chest pain", "Fatigue"]
  },
  {
    id: 15,
    genericName: "Gabapentin",
    brandNames: ["Neurontin"],
    primaryUse: "Seizures, nerve pain",
    category: "Anticonvulsant",
    commonSideEffects: ["Dizziness", "Drowsiness", "Swelling", "Coordination problems"]
  },
  {
    id: 16,
    genericName: "Tramadol",
    brandNames: ["Ultram"],
    primaryUse: "Moderate to severe pain",
    category: "Opioid Analgesic",
    commonSideEffects: ["Dizziness", "Nausea", "Constipation", "Headache"]
  },
  {
    id: 17,
    genericName: "Citalopram",
    brandNames: ["Celexa"],
    primaryUse: "Depression",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Dry mouth", "Sleepiness", "Insomnia"]
  },
  {
    id: 18,
    genericName: "Metoprolol",
    brandNames: ["Lopressor", "Toprol XL"],
    primaryUse: "High blood pressure, heart conditions",
    category: "Beta Blocker",
    commonSideEffects: ["Dizziness", "Fatigue", "Depression", "Slow heartbeat"]
  },
  {
    id: 19,
    genericName: "Pantoprazole",
    brandNames: ["Protonix"],
    primaryUse: "Acid reflux, stomach ulcers",
    category: "Proton Pump Inhibitor",
    commonSideEffects: ["Headache", "Diarrhea", "Nausea", "Stomach pain"]
  },
  {
    id: 20,
    genericName: "Fluoxetine",
    brandNames: ["Prozac"],
    primaryUse: "Depression, OCD, panic disorder",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Insomnia", "Headache", "Anxiety"]
  },
  {
    id: 21,
    genericName: "Amlodipine",
    brandNames: ["Norvasc"],
    primaryUse: "High blood pressure, chest pain",
    category: "Calcium Channel Blocker",
    commonSideEffects: ["Swelling", "Dizziness", "Flushing", "Headache"]
  },
  {
    id: 22,
    genericName: "Prednisone",
    brandNames: ["Deltasone", "Rayos"],
    primaryUse: "Inflammation, autoimmune conditions",
    category: "Corticosteroid",
    commonSideEffects: ["Weight gain", "Mood changes", "Insomnia", "Increased appetite"]
  },
  {
    id: 23,
    genericName: "Warfarin",
    brandNames: ["Coumadin", "Jantoven"],
    primaryUse: "Blood thinner",
    category: "Anticoagulant",
    commonSideEffects: ["Bleeding", "Bruising", "Hair loss", "Rash"]
  },
  {
    id: 24,
    genericName: "Diazepam",
    brandNames: ["Valium"],
    primaryUse: "Anxiety, muscle spasms",
    category: "Benzodiazepine",
    commonSideEffects: ["Drowsiness", "Dizziness", "Fatigue", "Muscle weakness"]
  },
  {
    id: 25,
    genericName: "Furosemide",
    brandNames: ["Lasix"],
    primaryUse: "Fluid retention, high blood pressure",
    category: "Diuretic",
    commonSideEffects: ["Dehydration", "Dizziness", "Low potassium", "Increased urination"]
  },
  {
    id: 26,
    genericName: "Loratadine",
    brandNames: ["Claritin"],
    primaryUse: "Allergies",
    category: "Antihistamine",
    commonSideEffects: ["Headache", "Dry mouth", "Drowsiness", "Nervousness"]
  },
  {
    id: 27,
    genericName: "Duloxetine",
    brandNames: ["Cymbalta"],
    primaryUse: "Depression, anxiety, nerve pain",
    category: "SNRI",
    commonSideEffects: ["Nausea", "Dry mouth", "Drowsiness", "Constipation"]
  },
  {
    id: 28,
    genericName: "Escitalopram",
    brandNames: ["Lexapro"],
    primaryUse: "Depression, anxiety",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Insomnia", "Sexual dysfunction", "Fatigue"]
  },
  {
    id: 29,
    genericName: "Clonazepam",
    brandNames: ["Klonopin"],
    primaryUse: "Seizures, panic disorder",
    category: "Benzodiazepine",
    commonSideEffects: ["Drowsiness", "Dizziness", "Depression", "Coordination problems"]
  },
  {
    id: 30,
    genericName: "Trazodone",
    brandNames: ["Desyrel"],
    primaryUse: "Depression",
    category: "SARI",
    commonSideEffects: ["Drowsiness", "Dizziness", "Dry mouth", "Headache"]
  },
  {
    id: 31,
    genericName: "Venlafaxine",
    brandNames: ["Effexor"],
    primaryUse: "Depression, anxiety",
    category: "SNRI",
    commonSideEffects: ["Nausea", "Headache", "Insomnia", "Dry mouth"]
  },
  {
    id: 32,
    genericName: "Bupropion",
    brandNames: ["Wellbutrin"],
    primaryUse: "Depression, smoking cessation",
    category: "NDRI",
    commonSideEffects: ["Dry mouth", "Insomnia", "Headache", "Nausea"]
  },
  {
    id: 33,
    genericName: "Mirtazapine",
    brandNames: ["Remeron"],
    primaryUse: "Depression",
    category: "Tetracyclic Antidepressant",
    commonSideEffects: ["Drowsiness", "Weight gain", "Increased appetite", "Dry mouth"]
  },
  {
    id: 34,
    genericName: "Quetiapine",
    brandNames: ["Seroquel"],
    primaryUse: "Schizophrenia, bipolar disorder",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Weight gain", "Dry mouth"]
  },
  {
    id: 35,
    genericName: "Aripiprazole",
    brandNames: ["Abilify"],
    primaryUse: "Schizophrenia, bipolar disorder",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Headache", "Anxiety", "Insomnia"]
  },
  {
    id: 36,
    genericName: "Olanzapine",
    brandNames: ["Zyprexa"],
    primaryUse: "Schizophrenia, bipolar disorder",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Drowsiness", "Dry mouth", "Increased appetite"]
  },
  {
    id: 37,
    genericName: "Risperidone",
    brandNames: ["Risperdal"],
    primaryUse: "Schizophrenia, bipolar disorder",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Drowsiness", "Dizziness", "Increased appetite"]
  },
  {
    id: 38,
    genericName: "Ziprasidone",
    brandNames: ["Geodon"],
    primaryUse: "Schizophrenia, bipolar disorder",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Nausea", "Restlessness"]
  },
  {
    id: 39,
    genericName: "Paliperidone",
    brandNames: ["Invega"],
    primaryUse: "Schizophrenia",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Drowsiness", "Headache", "Anxiety"]
  },
  {
    id: 40,
    genericName: "Asenapine",
    brandNames: ["Saphris"],
    primaryUse: "Schizophrenia, bipolar disorder",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Weight gain", "Increased appetite", "Dizziness"]
  },
  {
    id: 41,
    genericName: "Iloperidone",
    brandNames: ["Fanapt"],
    primaryUse: "Schizophrenia",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Dizziness", "Drowsiness", "Dry mouth", "Weight gain"]
  },
  {
    id: 42,
    genericName: "Lurasidone",
    brandNames: ["Latuda"],
    primaryUse: "Schizophrenia, bipolar depression",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Nausea", "Restlessness", "Weight gain"]
  },
  {
    id: 43,
    genericName: "Cariprazine",
    brandNames: ["Vraylar"],
    primaryUse: "Schizophrenia, bipolar disorder",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Restlessness", "Nausea", "Drowsiness"]
  },
  {
    id: 44,
    genericName: "Brexpiprazole",
    brandNames: ["Rexulti"],
    primaryUse: "Schizophrenia, depression",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Headache", "Restlessness", "Drowsiness"]
  },
  {
    id: 45,
    genericName: "Pimavanserin",
    brandNames: ["Nuplazid"],
    primaryUse: "Parkinson's disease psychosis",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Swelling", "Confusion", "Nausea", "Constipation"]
  },
  {
    id: 46,
    genericName: "Clozapine",
    brandNames: ["Clozaril"],
    primaryUse: "Treatment-resistant schizophrenia",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Weight gain", "Increased salivation"]
  },
  {
    id: 47,
    genericName: "Haloperidol",
    brandNames: ["Haldol"],
    primaryUse: "Schizophrenia, Tourette's syndrome",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 48,
    genericName: "Fluphenazine",
    brandNames: ["Prolixin"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 49,
    genericName: "Perphenazine",
    brandNames: ["Trilafon"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 50,
    genericName: "Thioridazine",
    brandNames: ["Mellaril"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Blurred vision", "Dry mouth"]
  },
  {
    id: 51,
    genericName: "Chlorpromazine",
    brandNames: ["Thorazine"],
    primaryUse: "Schizophrenia, nausea/vomiting",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Blurred vision", "Dry mouth"]
  },
  {
    id: 52,
    genericName: "Prochlorperazine",
    brandNames: ["Compazine"],
    primaryUse: "Nausea/vomiting, schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 53,
    genericName: "Trifluoperazine",
    brandNames: ["Stelazine"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 54,
    genericName: "Thiothixene",
    brandNames: ["Navane"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 55,
    genericName: "Molindone",
    brandNames: ["Moban"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 56,
    genericName: "Loxapine",
    brandNames: ["Loxitane"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 57,
    genericName: "Mesoridazine",
    brandNames: ["Serentil"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Blurred vision", "Dry mouth"]
  },
  {
    id: 58,
    genericName: "Pimozide",
    brandNames: ["Orap"],
    primaryUse: "Tourette's syndrome",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 59,
    genericName: "Penfluridol",
    brandNames: ["Semap"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 60,
    genericName: "Flupenthixol",
    brandNames: ["Depixol", "Fluanxol"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 61,
    genericName: "Zuclopenthixol",
    brandNames: ["Clopixol"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 62,
    genericName: "Chlorprothixene",
    brandNames: ["Taractan"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Blurred vision", "Dry mouth"]
  },
  {
    id: 63,
    genericName: "Tiotixene",
    brandNames: ["Navane"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 64,
    genericName: "Droperidol",
    brandNames: ["Inapsine"],
    primaryUse: "Nausea/vomiting",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 65,
    genericName: "Benperidol",
    brandNames: ["Anquil"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 66,
    genericName: "Bromperidol",
    brandNames: ["Impromen"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 67,
    genericName: "Melperone",
    brandNames: ["Buronil"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 68,
    genericName: "Periciazine",
    brandNames: ["Neuleptil"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 69,
    genericName: "Pipamperone",
    brandNames: ["Dipiperon"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 70,
    genericName: "Sultopride",
    brandNames: ["Barnetil"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 71,
    genericName: "Tiapride",
    brandNames: ["Tiapridal"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 72,
    genericName: "Veralipride",
    brandNames: ["Agreal"],
    primaryUse: "Schizophrenia",
    category: "Typical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 73,
    genericName: "Amisulpride",
    brandNames: ["Solian"],
    primaryUse: "Schizophrenia",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Drowsiness", "Restlessness", "Insomnia"]
  },
  {
    id: 74,
    genericName: "Nemonapride",
    brandNames: ["Emilace"],
    primaryUse: "Schizophrenia",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 75,
    genericName: "Remoxipride",
    brandNames: ["Roxiam"],
    primaryUse: "Schizophrenia",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Restlessness", "Muscle stiffness"]
  },
  {
    id: 76,
    genericName: "Sertindole",
    brandNames: ["Serdolect"],
    primaryUse: "Schizophrenia",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Drowsiness", "Dizziness", "QT prolongation"]
  },
  {
    id: 77,
    genericName: "Zotepine",
    brandNames: ["Zoleptil"],
    primaryUse: "Schizophrenia",
    category: "Atypical Antipsychotic",
    commonSideEffects: ["Weight gain", "Drowsiness", "Dizziness", "Increased appetite"]
  },
  {
    id: 78,
    genericName: "Amoxapine",
    brandNames: ["Asendin"],
    primaryUse: "Depression",
    category: "Tetracyclic Antidepressant",
    commonSideEffects: ["Drowsiness", "Dizziness", "Dry mouth", "Constipation"]
  },
  {
    id: 79,
    genericName: "Maprotiline",
    brandNames: ["Ludiomil"],
    primaryUse: "Depression",
    category: "Tetracyclic Antidepressant",
    commonSideEffects: ["Drowsiness", "Dizziness", "Dry mouth", "Blurred vision"]
  },
  {
    id: 80,
    genericName: "Mianserin",
    brandNames: ["Tolvon"],
    primaryUse: "Depression",
    category: "Tetracyclic Antidepressant",
    commonSideEffects: ["Drowsiness", "Dizziness", "Dry mouth", "Weight gain"]
  },
  {
    id: 81,
    genericName: "Setiptiline",
    brandNames: ["Tecipul"],
    primaryUse: "Depression",
    category: "Tetracyclic Antidepressant",
    commonSideEffects: ["Drowsiness", "Dizziness", "Dry mouth", "Constipation"]
  },
  {
    id: 82,
    genericName: "Nomifensine",
    brandNames: ["Merital"],
    primaryUse: "Depression",
    category: "NDRI",
    commonSideEffects: ["Insomnia", "Agitation", "Headache", "Nausea"]
  },
  {
    id: 83,
    genericName: "Viloxazine",
    brandNames: ["Vivalan"],
    primaryUse: "Depression",
    category: "NDRI",
    commonSideEffects: ["Nausea", "Headache", "Drowsiness", "Dizziness"]
  },
  {
    id: 84,
    genericName: "Reboxetine",
    brandNames: ["Edronax"],
    primaryUse: "Depression",
    category: "NRI",
    commonSideEffects: ["Dry mouth", "Insomnia", "Sweating", "Constipation"]
  },
  {
    id: 85,
    genericName: "Atomoxetine",
    brandNames: ["Strattera"],
    primaryUse: "ADHD",
    category: "NRI",
    commonSideEffects: ["Nausea", "Dry mouth", "Decreased appetite", "Insomnia"]
  },
  {
    id: 86,
    genericName: "Tianeptine",
    brandNames: ["Stablon", "Coaxil"],
    primaryUse: "Depression",
    category: "SSRE",
    commonSideEffects: ["Nausea", "Dizziness", "Headache", "Insomnia"]
  },
  {
    id: 87,
    genericName: "Agomelatine",
    brandNames: ["Valdoxan", "Thymanax"],
    primaryUse: "Depression",
    category: "Melatonergic Antidepressant",
    commonSideEffects: ["Headache", "Dizziness", "Nausea", "Insomnia"]
  },
  {
    id: 88,
    genericName: "Vortioxetine",
    brandNames: ["Trintellix", "Brintellix"],
    primaryUse: "Depression",
    category: "Multimodal Antidepressant",
    commonSideEffects: ["Nausea", "Headache", "Diarrhea", "Dizziness"]
  },
  {
    id: 89,
    genericName: "Vilazodone",
    brandNames: ["Viibryd"],
    primaryUse: "Depression",
    category: "Multimodal Antidepressant",
    commonSideEffects: ["Diarrhea", "Nausea", "Insomnia", "Dizziness"]
  },
  {
    id: 90,
    genericName: "Levomilnacipran",
    brandNames: ["Fetzima"],
    primaryUse: "Depression",
    category: "SNRI",
    commonSideEffects: ["Nausea", "Headache", "Constipation", "Sweating"]
  },
  {
    id: 91,
    genericName: "Desvenlafaxine",
    brandNames: ["Pristiq"],
    primaryUse: "Depression",
    category: "SNRI",
    commonSideEffects: ["Nausea", "Dizziness", "Sweating", "Constipation"]
  },
  {
    id: 92,
    genericName: "Milnacipran",
    brandNames: ["Savella"],
    primaryUse: "Fibromyalgia",
    category: "SNRI",
    commonSideEffects: ["Nausea", "Headache", "Constipation", "Sweating"]
  },
  {
    id: 93,
    genericName: "Duloxetine",
    brandNames: ["Cymbalta"],
    primaryUse: "Depression, anxiety, nerve pain",
    category: "SNRI",
    commonSideEffects: ["Nausea", "Dry mouth", "Drowsiness", "Constipation"]
  },
  {
    id: 94,
    genericName: "Venlafaxine",
    brandNames: ["Effexor"],
    primaryUse: "Depression, anxiety",
    category: "SNRI",
    commonSideEffects: ["Nausea", "Headache", "Insomnia", "Dry mouth"]
  },
  {
    id: 95,
    genericName: "Fluoxetine",
    brandNames: ["Prozac"],
    primaryUse: "Depression, OCD, panic disorder",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Insomnia", "Headache", "Anxiety"]
  },
  {
    id: 96,
    genericName: "Paroxetine",
    brandNames: ["Paxil"],
    primaryUse: "Depression, anxiety disorders",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Drowsiness", "Insomnia", "Sexual dysfunction"]
  },
  {
    id: 97,
    genericName: "Sertraline",
    brandNames: ["Zoloft"],
    primaryUse: "Depression, anxiety disorders",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Insomnia", "Sexual dysfunction", "Weight changes"]
  },
  {
    id: 98,
    genericName: "Citalopram",
    brandNames: ["Celexa"],
    primaryUse: "Depression",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Dry mouth", "Sleepiness", "Insomnia"]
  },
  {
    id: 99,
    genericName: "Escitalopram",
    brandNames: ["Lexapro"],
    primaryUse: "Depression, anxiety",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Insomnia", "Sexual dysfunction", "Fatigue"]
  },
  {
    id: 100,
    genericName: "Fluvoxamine",
    brandNames: ["Luvox"],
    primaryUse: "OCD, depression",
    category: "SSRI",
    commonSideEffects: ["Nausea", "Drowsiness", "Insomnia", "Headache"]
  }
]; 