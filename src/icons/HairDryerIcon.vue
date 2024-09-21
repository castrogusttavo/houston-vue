
<template>
  <Icon :iconName="'hair-dryer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HairDryerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hair-dryer'
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
