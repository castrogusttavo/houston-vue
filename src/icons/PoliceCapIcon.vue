
<template>
  <Icon :iconName="'police-cap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoliceCapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'police-cap'
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
