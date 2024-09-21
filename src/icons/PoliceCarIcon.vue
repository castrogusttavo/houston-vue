
<template>
  <Icon :iconName="'police-car'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoliceCarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'police-car'
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
