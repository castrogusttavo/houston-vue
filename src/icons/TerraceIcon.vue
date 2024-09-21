
<template>
  <Icon :iconName="'terrace'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TerraceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'terrace'
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
