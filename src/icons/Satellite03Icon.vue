
<template>
  <Icon :iconName="'satellite-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Satellite03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'satellite-03'
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
