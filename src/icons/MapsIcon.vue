
<template>
  <Icon :iconName="'maps'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps'
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
