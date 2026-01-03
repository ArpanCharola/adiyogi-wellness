# backend/seed_ebooks.py
import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from api.models import Ebook, EbookCategory

print("🌱 Starting ebook seeding...")

# Create categories
categories = [
    {'name': 'Anxiety', 'slug': 'anxiety', 'color': '#3B82F6', 'icon': 'AlertCircle'},
    {'name': 'Depression', 'slug': 'depression', 'color': '#8B5CF6', 'icon': 'CloudRain'},
    {'name': 'Stress Management', 'slug': 'stress-management', 'color': '#10B981', 'icon': 'Wind'},
    {'name': 'Psychotherapy', 'slug': 'psychotherapy', 'color': '#6366F1', 'icon': 'Eye'},
    {'name': 'Personal Development', 'slug': 'personal-development', 'color': '#F59E0B', 'icon': 'Heart'},
    {'name': 'Crisis Intervention', 'slug': 'crisis-intervention', 'color': '#EC4899', 'icon': 'Tool'},
    {'name': 'Substance Abuse', 'slug': 'substance-abuse', 'color': '#EF4444', 'icon': 'Shield'},
    {'name': 'Couple & Family Therapy', 'slug': 'couple-family-therapy', 'color': '#8B5CF6', 'icon': 'Users'},
    {'name': 'Personality Disorders', 'slug': 'personality-disorders', 'color': '#10B981', 'icon': 'User'},
    {'name': 'Eating Disorders', 'slug': 'eating-disorders', 'color': '#8B5CF6', 'icon': 'Activity'},
]

for cat_data in categories:
    cat, created = EbookCategory.objects.get_or_create(**cat_data)
    print(f"📂 {'✅ Created' if created else 'ℹ️ Exists'}: {cat.name}")

# Create ebooks - UPDATED with correct frontend paths
ebooks_data = [
    {
        'title': 'Cognitive Therapy',
        'slug': 'cognitive-therapy',
        'category': 'Psychotherapy',
        'author': 'Rush, John',
        'description': 'A psychotherapy guidebook focusing on cognitive approaches to mental health treatment.',
        'cover_image': '/assets/ebooks/cognitive-therapy.png',
        'file_url': '/static/ebooks/cognitive-therapy.pdf',
        'tags': ['psychotherapy', 'cognitive therapy', 'depression'],
        'featured': True
    },
    {
        'title': 'The Nature and Treatment of Anxiety Disorders',
        'slug': 'nature-treatment-anxiety-disorders',
        'category': 'Anxiety',
        'author': 'Arnow, Bruce, Ph.D., Taylor, C. Barr, M.D.',
        'description': 'Integrates theoretical, empirical, and clinical knowledge into a coherent framework for understanding and treating various anxiety disorders.',
        'cover_image': '/assets/ebooks/anxiety-disorders.png',
        'file_url': '/static/ebooks/the_nature_and_treatment_of_anxiety_disorders.pdf',
        'tags': ['anxiety', 'treatment', 'disorders'],
        'featured': True
    },
    {
        'title': 'Mental Health Guidebook: for the Covid-19 Pandemic',
        'slug': 'mental-health-guidebook-covid19',
        'category': 'Crisis Intervention',
        'author': 'Bosnjak, Irina Perisic, Jelcic, Andjelka',
        'description': 'Created by a psychotherapist and visual artists to help the vulnerable and spread a sense of community during the pandemic.',
        'cover_image': '/assets/ebooks/covid19-guidebook.png',
        'file_url': '/static/ebooks/MentalHealthGuidebookCovid19.pdf',
        'tags': ['covid-19', 'pandemic', 'crisis', 'stress'],
        'featured': True
    },
    {
        'title': 'Social Phobia',
        'slug': 'social-phobia',
        'category': 'Anxiety',
        'author': 'National Institute of Mental Health',
        'description': 'A brochure explaining the signs, symptoms, and treatments for social phobia (Social Anxiety Disorder).',
        'cover_image': '/assets/ebooks/social-phobia.png',
        'file_url': '/static/ebooks/social-phobia.pdf',
        'tags': ['social anxiety', 'phobia', 'anxiety disorder'],
        'featured': False
    },
    {
        'title': 'Living with Chronic Depression: A Rehabilitation Approach',
        'slug': 'living-with-chronic-depression',
        'category': 'Depression',
        'author': 'Levin, Jerome D. Ph.D.',
        'description': 'A book stating the truth that some forms of depression constitute a life-changing disability and provides a rehabilitation approach.',
        'cover_image': '/assets/ebooks/chronic-depression.png',
        'file_url': '/static/ebooks/living_with_chronic_depression.pdf',
        'tags': ['depression', 'chronic', 'rehabilitation'],
        'featured': False
    },
    {
        'title': 'Depressive Disorders: Facts, Theories, and Treatment',
        'slug': 'depressive-disorders',
        'category': 'Depression',
        'author': 'Stricker, George, Wolman, Benjamin B., Ph.D.',
        'description': 'Spans three general areas: theories of depression, symptomatology, and clinical treatments from behavioral, cognitive, and psychoanalytic perspectives.',
        'cover_image': '/assets/ebooks/depressive-disorders.png',
        'file_url': '/static/ebooks/depressivedisorders.pdf',
        'tags': ['depression', 'theories', 'treatment'],
        'featured': False
    },
    {
        'title': 'Severe and Mild Depression',
        'slug': 'severe-mild-depression',
        'category': 'Depression',
        'author': 'Arieti, Silvano, M.D., Bemporad, Jules R., M.D.',
        'description': 'An original view of the causes and treatment of depression, focusing on psychodynamics and psychotherapy for all states, including postpartum depression.',
        'cover_image': '/assets/ebooks/severe-mild-depression.png',
        'file_url': '/static/ebooks/severemilddep.pdf',
        'tags': ['depression', 'severe', 'mild', 'psychotherapy'],
        'featured': False
    },
    {
        'title': 'Life Skills Counseling',
        'slug': 'life-skills-counseling',
        'category': 'Personal Development',
        'author': 'Adkins, Winthrop R.',
        'description': 'A planned counseling intervention designed to help people learn to cope more effectively with predictable psychological and social problems and crises.',
        'cover_image': '/assets/ebooks/life-skills.png',
        'file_url': '/static/ebooks/life-skills-counseling.pdf',
        'tags': ['life skills', 'counseling', 'coping'],
        'featured': False
    },
    {
        'title': 'Make Every Session Count: Getting the Most Out of Your Brief Therapy',
        'slug': 'make-every-session-count',
        'category': 'Psychotherapy',
        'author': 'Liebert, Douglas Ph.D., Preston, John Psy.D., Varzos, Nicholette Ph.D.',
        'description': 'A client guide to brief therapy, helping patients and therapists maximize the effectiveness of short-term treatment (six to ten sessions).',
        'cover_image': '/assets/ebooks/brief-therapy.png',
        'file_url': '/static/ebooks/make_every_session_count.pdf',
        'tags': ['brief therapy', 'psychotherapy', 'sessions'],
        'featured': True
    },
    {
        'title': 'Psychotherapy with Suicidal Patients',
        'slug': 'psychotherapy-suicidal-patients',
        'category': 'Crisis Intervention',
        'author': 'Shneidman, Edwin S., Ph.D.',
        'description': 'Focuses on the goals of crisis intervention to keep highly suicidal persons alive rather than attempting to ameliorate the entire personality structure.',
        'cover_image': '/assets/ebooks/suicidal-patients.png',
        'file_url': '/static/ebooks/psychotherapywithsuicidalpatients_853150892.pdf',
        'tags': ['suicide', 'crisis intervention', 'psychotherapy'],
        'featured': False
    },
    {
        'title': 'Principles of Behavior Modification',
        'slug': 'principles-behavior-modification',
        'category': 'Psychotherapy',
        'author': 'Bandura, Albert',
        'description': 'A classic work presenting basic psychological principles governing human behavior within the conceptual framework of social learning.',
        'cover_image': '/assets/ebooks/behavior-modification.png',
        'file_url': '/static/ebooks/Principles-of-Behavior-Modification-Albert-Bandura.pdf',
        'tags': ['behavior modification', 'psychology', 'social learning'],
        'featured': True
    },
    {
        'title': 'Treating Borderline States in Marriage',
        'slug': 'treating-borderline-states-marriage',
        'category': 'Couple & Family Therapy',
        'author': 'McCormack, Charles C.',
        'description': 'Deals with oppositionalism, ruthless aggression, and severe resistance in personality-disordered couples who seem impervious to change.',
        'cover_image': '/assets/ebooks/borderline-marriage.png',
        'file_url': '/static/ebooks/TREATING-BORDERLINE-STATES-IN-MARRIAGE-Charles-C.-McCormack.pdf',
        'tags': ['borderline', 'marriage', 'couple therapy'],
        'featured': False
    },
    {
        'title': 'Between Two Worlds: Aspects of the Transition from School to Work',
        'slug': 'between-two-worlds',
        'category': 'Personal Development',
        'author': 'Scharff, David E., M.D.',
        'description': 'Research into the transition from school to work and how the lack of support during this stage results in anxiety and other disturbances.',
        'cover_image': '/assets/ebooks/school-to-work.png',
        'file_url': '/static/ebooks/Between-Two-Worlds-Scharff.pdf',
        'tags': ['transition', 'career', 'anxiety'],
        'featured': False
    },
    {
        'title': 'Attention Deficit/Hyperactivity Disorder',
        'slug': 'attention-deficit-hyperactivity-disorder',
        'category': 'Psychotherapy',
        'author': 'National Institute of Mental Health',
        'description': 'An easy-to-read booklet about attention deficit hyperactivity disorder.',
        'cover_image': '/assets/ebooks/adhd.png',
        'file_url': '/static/ebooks/adhd-1533075146.pdf',
        'tags': ['ADHD', 'attention deficit', 'hyperactivity'],
        'featured': False
    },
    {
        'title': 'How Friends and Relatives Can Help',
        'slug': 'how-friends-relatives-can-help',
        'category': 'Personal Development',
        'author': 'Andreasen, Nancy C., M.D. Ph.D.',
        'description': 'Explores how friends and relatives can help patients find faith, hope, and love alongside clinical medications and psychiatry.',
        'cover_image': '/assets/ebooks/friends-help.png',
        'file_url': '/static/ebooks/how-friends-and-relatives-can-help-nancy-g-andreasen.pdf',
        'tags': ['support', 'family', 'mental illness'],
        'featured': False
    },
    {
        'title': 'Marital and Family Therapy for Depression',
        'slug': 'marital-family-therapy-depression',
        'category': 'Couple & Family Therapy',
        'author': 'Colby, Catherine, Gotlib, Ian, Wallace, Pamela',
        'description': 'A specialized guide focusing on the application of family and marital therapy specifically for treating depression.',
        'cover_image': '/assets/ebooks/marital-family-therapy.png',
        'file_url': '/static/ebooks/marital_and_family_therapy_for_depremela_m__wallace__catherine_a__colby.pdf',
        'tags': ['marital therapy', 'family therapy', 'depression'],
        'featured': False
    },
    {
        'title': 'The Self and Therapy',
        'slug': 'self-and-therapy',
        'category': 'Psychotherapy',
        'author': 'Levin, Jerome D. Ph.D.',
        'description': 'Explores the understanding of the self and narcissism, focusing on modern developments from philosophical debates to contemporary psychoanalytical concepts.',
        'cover_image': '/assets/ebooks/self-therapy.png',
        'file_url': '/static/ebooks/the_self_and_therapy__602047339.pdf',
        'tags': ['self', 'narcissism', 'psychoanalysis'],
        'featured': False
    },
    {
        'title': 'Overcoming Our Relationship Fears: WORKBOOK',
        'slug': 'overcoming-relationship-fears',
        'category': 'Couple & Family Therapy',
        'author': 'Hedges, Lawrence E. Ph.D., Psy.D., ABPP',
        'description': 'A series of exercises for individuals and couples wishing to learn how to release their Body-Mind-Relationship fear reflexes.',
        'cover_image': '/assets/ebooks/relationship-fears.png',
        'file_url': '/static/ebooks/overcoming_our_relationships_fear.pdf',
        'tags': ['relationship fears', 'workbook', 'couple therapy', 'trauma'],
        'featured': True
    },
    {
        'title': 'A Primer on Working with Resistance',
        'slug': 'primer-working-with-resistance',
        'category': 'Psychotherapy',
        'author': 'Stark, Martha M.D.',
        'description': 'A practical and theoretical guide regarding the patient reluctance to change & how to face the everyday travails of psychotherapy. ',
        'cover_image': '/assets/ebooks/working-resistance.png',
        'file_url': '/static/ebooks/A-Primer-on-Working-With-Resistance-Martha-Stark-MD.pdf',
        'tags': ['resistance', 'psychotherapy', 'change'],
        'featured': False
    },
    {
        'title': 'Working the Organizing Experience',
        'slug': 'working-organizing-experience',
        'category': 'Psychotherapy',
        'author': 'Hedges, Lawrence E. Ph.D., Psy.D., ABPP',
        'description': 'Defines transference phenomena and traces negative therapeutic reactions to traumas endured in infancy.',
        'cover_image': '/assets/ebooks/organizing-experience.png',
        'file_url': '/static/ebooks/Working-the-Organizing-Experience-Lawrence-E.-Hedges.pdf',
        'tags': ['trauma', 'psychosis', 'transference'],
        'featured': False
    },
    {
        'title': 'Half Empty Half Full: understanding the psychological roots of optimism',
        'slug': 'half-empty-half-full',
        'category': 'Personal Development',
        'author': 'Vaughan, Susan C., M.D.',
        'description': 'Offers fresh ways to understand optimism and how healthy illusions form the basis of a positive outlook on life.',
        'cover_image': '/assets/ebooks/optimism.png',
        'file_url': '/static/ebooks/Half-Empty-Half-Full.pdf',
        'tags': ['optimism', 'positive outlook', 'psychology'],
        'featured': False
    },
    {
        'title': 'Understanding Mental Illness: A Layman\'s Guide',
        'slug': 'understanding-mental-illness',
        'category': 'Psychotherapy',
        'author': 'Andreasen, Nancy C., M.D. Ph.D.',
        'description': 'Designed to provide accurate, non-technical information about mental illness—diseases that affect the nervous system, emotion, and behavior.',
        'cover_image': '/assets/ebooks/mental-illness-guide.png',
        'file_url': '/static/ebooks/understanding-mental-illness.pdf',
        'tags': ['mental illness', 'layman guide', 'education'],
        'featured': False
    },
    {
        'title': 'Problem Drinkers: Guided Self-Change Treatment',
        'slug': 'problem-drinkers',
        'category': 'Substance Abuse',
        'author': 'Sobell, Linda C. Ph.D. ABPP, Sobell, Mark B. Ph.D. ABPP',
        'description': 'Presents a program of motivational interventions for problem drinkers who have life difficulties due to drinking but are not severely dependent.',
        'cover_image': '/assets/ebooks/problem-drinkers.png',
        'file_url': '/static/ebooks/problem_drinkers_guided_self-change_trtment_-_mark_b__sobell_linda_c__sobell.pdf',
        'tags': ['alcoholism', 'substance abuse', 'self-change'],
        'featured': False
    },
    {
        'title': 'Alcoholism and Treatment',
        'slug': 'alcoholism-and-treatment',
        'category': 'Substance Abuse',
        'author': 'Armor, David J., Polich, J. Michael, Stambul, Harriet B.',
        'description': 'A study based on NIAAA data that analyzes theories of alcoholism and establishes hypotheses about the success of different treatment modalities.',
        'cover_image': '/assets/ebooks/alcoholism-treatment.png',
        'file_url': '/static/ebooks/alcoholism_and_treatment.pdf',
        'tags': ['alcoholism', 'treatment', 'substance abuse'],
        'featured': False
    },
    {
        'title': 'Cocaine: a drug and its social evolution',
        'slug': 'cocaine-drug-social-evolution',
        'category': 'Substance Abuse',
        'author': 'Bakalar, James B., Grinspoon, Lester',
        'description': 'Provides a history of cocaine\'s preparation and use, including medical, pharmacological, legal, and social analysis.',
        'cover_image': '/assets/ebooks/cocaine.png',
        'file_url': '/static/ebooks/Cocaine_-a-drug-and-its-social-evolution.pdf',
        'tags': ['cocaine', 'substance abuse', 'drug history'],
        'featured': False
    },
    {
        'title': 'Eating Disorders: About More Than Food',
        'slug': 'eating-disorders',
        'category': 'Eating Disorders',
        'author': 'National Institute of Mental Health',
        'description': 'A guide for those concerned about their outward appearance or whose urge to eat less or more food has spiraled out of control.',
        'cover_image': '/assets/ebooks/eating-disorders.png',
        'file_url': '/static/ebooks/eating-disorders.pdf',
        'tags': ['eating disorders', 'food', 'body image'],
        'featured': False
    },
    {
        'title': 'Self Hatred in Psychoanalysis',
        'slug': 'self-hatred-psychoanalysis',
        'category': 'Psychotherapy',
        'author': 'Scharff, Jill Savege, M.D., Tsigounis, Stanley A.',
        'description': 'Explores how psychological therapies can deal with persecutory states of mind where elements of the personality attack confidence and productivity.',
        'cover_image': '/assets/ebooks/self-hatred.png',
        'file_url': '/static/ebooks/Self-Hatred-in-Psychoanalysis-Jill-Savege-Scharff.pdf',
        'tags': ['self hatred', 'psychoanalysis', 'personality'],
        'featured': False
    },
    {
        'title': 'How to Talk to an Obsessive-Compulsive Personality',
        'slug': 'how-to-talk-ocpd',
        'category': 'Personality Disorders',
        'author': 'Lachkar, Joan, Ph.D.',
        'description': 'Helps therapists and patients interact with those who have OCPD by using specific communication styles like the Language of Empathology.',
        'cover_image': '/assets/ebooks/ocpd.png',
        'file_url': '/static/ebooks/How-to-Talk-to-an-Obsessive-Compulsive-Dis-Joan-Lachkar.pdf',
        'tags': ['OCPD', 'obsessive-compulsive', 'personality disorders', 'communication'],
        'featured': False
    },
    {
        'title': 'Beyond Blame',
        'slug': 'beyond-blame',
        'category': 'Personal Development',
        'author': 'Kottler, Jeffrey Ph.D.',
        'description': 'Shows that the key to resolving conflicts with friends and family is finding the key within ourselves and learning to react differently.',
        'cover_image': '/assets/ebooks/beyond-blame.png',
        'file_url': '/static/ebooks/beyond_blames_25068283.pdf',
        'tags': ['conflict resolution', 'blame', 'anger', 'relationships'],
        'featured': False
    },
    {
        'title': 'Post-Traumatic Stress Disorder (PTSD)',
        'slug': 'post-traumatic-stress-disorder',
        'category': 'Crisis Intervention',
        'author': 'National Institute of Mental Health',
        'description': 'Information about post-traumatic stress disorder, its symptoms, and treatment options.',
        'cover_image': '/assets/ebooks/ptsd.png',
        'file_url': '/static/ebooks/post-traumatic_stress_disorder_ptsd.pdf',
        'tags': ['PTSD', 'trauma', 'stress disorder'],
        'featured': True
    },
]

category_objs = {cat.name: cat for cat in EbookCategory.objects.all()}

print(f"\n📚 Creating {len(ebooks_data)} eBooks...")

created_count = 0
for i, ebook_data in enumerate(ebooks_data, 1):
    category_name = ebook_data.pop('category')
    ebook_data['category'] = category_objs[category_name]
    
    ebook, created = Ebook.objects.get_or_create(
        slug=ebook_data['slug'],
        defaults=ebook_data
    )
    
    if created:
        created_count += 1
        status = '✅ CREATED'
    else:
        status = 'ℹ️ EXISTS'
    
    print(f"{status} {i:02d}: {ebook.title}")
    print(f"   → Cover: {ebook.cover_image} ✅")
    print(f"   → PDF: {ebook.file_url}")

print(f"\n🎉 Seeding complete!")
print(f"  • Created {created_count} new eBooks")
print(f"  • {len(ebooks_data) - created_count} eBooks already existed")
print(f"  • Total eBooks: {Ebook.objects.count()}")
print(f"\n📁 IMAGE DIRECTORY STRUCTURE:")
print("frontend/public/assets/ebooks/")
print("├── adhd.png")
print("├── alcoholism-treatment.png")
print("├── anxiety-disorders.png")
print("├── behavior-modification.png")
print("├── beyond-blame.png")
print("├── borderline-marriage.png")
print("├── brief-therapy.png")
print("├── chronic-depression.png")
print("├── cocaine.png")
print("├── cognitive-therapy.png")
print("├── covid19-guidebook.png")
print("├── depressive-disorders.png")
print("├── eating-disorders.png")
print("├── friends-help.png")
print("├── life-skills.png")
print("├── marital-family-therapy.png")
print("├── mental-illness-guide.png")
print("├── ocpd.png")
print("├── optimism.png")
print("├── organizing-experience.png")
print("├── problem-drinkers.png")
print("├── ptsd.png")
print("├── relationship-fears.png")
print("├── school-to-work.png")
print("├── self-hatred.png")
print("├── self-therapy.png")
print("├── severe-mild-depression.png")
print("├── social-phobia.png")
print("├── suicidal-patients.png")
print("├── working-resistance.png")
print("└── ...")
print(f"\n🚀 Next steps:")
print("1. Make sure all image files are in: frontend/public/assets/ebooks/")
print("2. Make sure all PDF files are in: backend/static/ebooks/")
print("3. Run: python manage.py runserver (backend)")
print("4. Run: npm run dev (frontend)")