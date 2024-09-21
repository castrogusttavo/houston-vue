
<template>
  <Icon :iconName="'cheese-cake-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheeseCake02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cheese-cake-02'
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
