
<template>
  <Icon :iconName="'polygon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PolygonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'polygon'
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
