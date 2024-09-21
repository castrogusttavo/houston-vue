
<template>
  <Icon :iconName="'luggage-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Luggage02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'luggage-02'
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
