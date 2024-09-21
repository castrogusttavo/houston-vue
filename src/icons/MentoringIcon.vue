
<template>
  <Icon :iconName="'mentoring'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MentoringIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mentoring'
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
