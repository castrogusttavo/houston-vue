
<template>
  <Icon :iconName="'question'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuestionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'question'
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
