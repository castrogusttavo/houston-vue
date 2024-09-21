
<template>
  <Icon :iconName="'hyperbole'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HyperboleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hyperbole'
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
