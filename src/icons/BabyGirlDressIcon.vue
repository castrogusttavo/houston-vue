
<template>
  <Icon :iconName="'baby-girl-dress'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BabyGirlDressIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baby-girl-dress'
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
