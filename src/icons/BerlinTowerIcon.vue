
<template>
  <Icon :iconName="'berlin-tower'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BerlinTowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'berlin-tower'
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
