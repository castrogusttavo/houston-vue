
<template>
  <Icon :iconName="'baby-boy-dress'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BabyBoyDressIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baby-boy-dress'
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
