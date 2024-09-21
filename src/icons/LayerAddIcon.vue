
<template>
  <Icon :iconName="'layer-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayerAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layer-add'
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
