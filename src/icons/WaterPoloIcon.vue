
<template>
  <Icon :iconName="'water-polo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaterPoloIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'water-polo'
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
