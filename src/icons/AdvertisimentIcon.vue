
<template>
  <Icon :iconName="'advertisiment'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdvertisimentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'advertisiment'
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
