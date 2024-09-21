
<template>
  <Icon :iconName="'radius'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RadiusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'radius'
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
