
<template>
  <Icon :iconName="'group-layers'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GroupLayersIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'group-layers'
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
