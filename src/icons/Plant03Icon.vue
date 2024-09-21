
<template>
  <Icon :iconName="'plant-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Plant03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plant-03'
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
