
<template>
  <Icon :iconName="'linkedin-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Linkedin02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'linkedin-02'
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
