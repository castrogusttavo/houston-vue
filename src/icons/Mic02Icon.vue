
<template>
  <Icon :iconName="'mic-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mic02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mic-02'
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
