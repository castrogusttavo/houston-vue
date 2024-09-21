
<template>
  <Icon :iconName="'png-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Png02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'png-02'
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
