
<template>
  <Icon :iconName="'user-question-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserQuestion02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-question-02'
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
