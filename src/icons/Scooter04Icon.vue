
<template>
  <Icon :iconName="'scooter-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Scooter04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scooter-04'
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
