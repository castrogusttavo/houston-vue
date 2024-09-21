
<template>
  <Icon :iconName="'maps-editing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsEditingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-editing'
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
