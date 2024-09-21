
<template>
  <Icon :iconName="'structure-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Structure03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-03'
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
