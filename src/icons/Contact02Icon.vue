
<template>
  <Icon :iconName="'contact-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Contact02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'contact-02'
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
