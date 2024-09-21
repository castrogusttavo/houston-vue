
<template>
  <Icon :iconName="'mail-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mail02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-02'
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
