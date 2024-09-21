
<template>
  <Icon :iconName="'hexagon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HexagonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hexagon'
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
