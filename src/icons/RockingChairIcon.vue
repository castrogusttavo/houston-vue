
<template>
  <Icon :iconName="'rocking-chair'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RockingChairIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rocking-chair'
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
