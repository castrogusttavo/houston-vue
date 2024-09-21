
<template>
  <Icon :iconName="'ambulance'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AmbulanceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ambulance'
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
