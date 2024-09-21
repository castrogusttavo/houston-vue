
<template>
  <Icon :iconName="'camper'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CamperIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camper'
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
