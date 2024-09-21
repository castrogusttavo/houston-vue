
<template>
  <Icon :iconName="'forward-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Forward02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'forward-02'
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
