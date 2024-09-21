
<template>
  <Icon :iconName="'language-skill'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LanguageSkillIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'language-skill'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
