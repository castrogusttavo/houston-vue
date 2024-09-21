
<template>
  <Icon :iconName="'maps-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-off'
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
