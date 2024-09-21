
<template>
  <Icon :iconName="'road'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RoadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'road'
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
