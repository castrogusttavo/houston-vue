
<template>
  <Icon :iconName="'yelp'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YelpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yelp'
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
