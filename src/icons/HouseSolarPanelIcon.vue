
<template>
  <Icon :iconName="'house-solar-panel'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HouseSolarPanelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'house-solar-panel'
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
