
<template>
  <Icon :iconName="'patio'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PatioIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'patio'
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
